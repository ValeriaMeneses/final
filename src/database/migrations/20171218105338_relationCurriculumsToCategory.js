
exports.up = function(knex, Promise) {
  return knex
    .schema
    .table('curriculums', table => {
      table
        .integer('categoryId')
        .unsigned()
        .references('id')
        .inTable('category')

      return table;
    })


};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .table('curriculums', table =>{
      table.dropForeingn('categoryId');
      table.dropColumn('companyId')
    })
};
