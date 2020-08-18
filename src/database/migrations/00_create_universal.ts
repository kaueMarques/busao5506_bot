import knex from 'knex'

export async function up(knex:knex) {
    return knex.schema.createTable('universal', table => {
        table.increments('id').primary()
        table.string('preco').notNullable()
    })
} 

export async function down(knex:knex) {
    return knex.schema.dropTableIfExists('universal')
} 