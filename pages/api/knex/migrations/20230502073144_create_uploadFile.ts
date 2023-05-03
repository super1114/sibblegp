import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('uploadfile', (table) => {
        table.increments('id').primary()
        table.integer('report_id').notNullable()
        table.string('descripition')
        table.string('link')
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('uploadfile')
}

