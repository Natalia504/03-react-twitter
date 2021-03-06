exports.up = function(knex) {
    return knex.schema.createTable('replies', (table) => {
      table.increments();
      table.string('text').notNullable();
      table.integer('user_id').notNullable().references('users.id').onDelete('CASCADE');
      table.integer('message_id').notNullable().references('messages.id').onDelete('CASCADE');
      table.timestamps(true, true);
    });
  }
  
  exports.down = function(knex) {
    return knex.schema.dropTable('replies');
  }