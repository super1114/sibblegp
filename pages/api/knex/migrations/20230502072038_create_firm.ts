import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('firm', (table) => {
        table.increments('id').primary()
        table.string('name')
        table.string('logoUrl')
        table.string('webSite')
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('firm')
}

