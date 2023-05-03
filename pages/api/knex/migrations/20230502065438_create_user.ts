import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', (table) => {
        table.increments('id').primary()
        table.string('firstName')
        table.string('lastName')
        table.string('email')
        table.string('phoneNumber')
        table.string('password')
        table.string('item')
        table.string('picUrl')
        table.string('identifyLink')
        table.string('hashedPass')
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('user')
}

