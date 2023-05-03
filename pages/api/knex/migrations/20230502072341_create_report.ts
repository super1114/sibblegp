import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('report', (table) => {
        table.increments('id').primary()
        table.string('name')
        table.string('webSite')
        table.string('logoUrl')
        table.string('ceoFirstName')
        table.string('ceoLaseName')
        table.string('linkedinUrl')
        table.string('companyUrl')
        table.string('productSum')
        table.string('stackSum')
        table.string('techSum')
        table.string('usableSum')
        table.string('desingSum')
        table.string('dataSum')
        table.string('talentSum')
        table.string('overallSum')
        table.string('productScore')
        table.string('techScore')
        table.string('usableScore')
        table.string('designScore')
        table.string('dataScore')
        table.string('talentScore')
        table.string('reportUrl')
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('report')
}

