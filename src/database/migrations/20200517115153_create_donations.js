
exports.up = function(knex) {
  return knex.schema.createTable('donations', function (table) {
    table.increments();

    table.string('date').notNullable();
    table.string('schedule').notNullable();

    table.string('donation_stand_id').notNullable();

    table.foreign('donation_stand_id').references('id').inTable('donation_stands');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('donations');
};
