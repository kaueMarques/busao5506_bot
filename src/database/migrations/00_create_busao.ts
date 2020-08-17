import knex from 'knex'

export async function up(knex:knex) {
    return knex.schema.createTable('horarios', table => {
        table.increments('id').primary()
        table.string('horario').notNullable()
    })
} 

export async function down(knex:knex) {
    return knex.schema.dropTableIfExists('horarios')
} 