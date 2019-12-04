'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class InscriptionSchema extends Schema {
  up() {
    this.create('inscriptions', table => {
      table.increments();
      table
        .integer('student_id')
        .unsigned()
        .notNullable();
      table
        .foreign('student_id')
        .references('id')
        .inTable('students')
        .onDelete('cascade');
      table.integer('plan_id').unsigned();

      table
        .foreign('plan_id')
        .references('id')
        .inTable('plans')
        .onDelete('SET NULL');
      table.timestamp('start_date');
      table.timestamp('end_date');
      table.float('price', 5, 2);
      table.timestamps();
    });
  }

  down() {
    this.drop('inscriptions');
  }
}

module.exports = InscriptionSchema;
