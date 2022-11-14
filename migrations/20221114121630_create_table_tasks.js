/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('tasks', table => {
      table.increments('id').primary()
      table.string('desc').notNullable()
      table.dateTime('estimatedAt')
      table.time('duracao')
      table.dateTime('doneAt')
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
      return knex.schema.dropTable('tasks')
  };
  