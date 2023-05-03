import { NextApiRequest, NextApiResponse } from "next";
import { getKnex } from './knex'
import bcrypt from "bcrypt"

interface User {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    password: string;
    item?: string;
    picUrl?: string;
    identifyLink?: string;
    hashedPass?: string;
}

const knex = getKnex()

export default async function Register(req: NextApiRequest, res: NextApiResponse) {
    const { method, body } = req
    switch (method) {
        case "POST":
            try {
                const { firstName, lastName, email, password } = body as User;
                console.log("here")
                // Check if user already exists
                const existingUser = await knex<User>("user")
                    .where("email", email)
                    .first();
                if (existingUser) {
                    return res.status(409).json({ message: "Email already exists" });
                }
                const saltRounds = 10;
                const hashedPassword = await bcrypt.hash(password, saltRounds)

                //Create New user
                const newUser = { firstName, lastName, email, password: hashedPassword }
                const [userId] = await knex("user").insert(newUser).returning('id')
                const createdUser = await knex("user").where("id", userId).first()
                res.status(201).json(createdUser)
            } catch (error) {
                console.error(error)
                res.status(500).json({ message: "Internal server error" })
            }
            break;
        default:
            res.setHeader("Allow", ["POST"])
            res.status(405).json({message: "Mothod ${method} not allowed"})
        }

}

export const insertUser = async (args: Partial<User>,): Promise<User | null> => {
    try {
        let [user] = await knex<User>('user').insert({
            ...args,
        }, '*')
        return user
    } catch (e) {
        console.log('err on insertUser >> ', e)
    return null
    }
}