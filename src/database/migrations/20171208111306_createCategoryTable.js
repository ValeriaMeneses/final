
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('category', table => {
      table.increments();

      table.string('categorias');

  })
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('category');
};
