'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class CheckinSchema extends Schema {
  up() {
    this.create('checkins', table => {
      table.increments();
      table
        .integer('student_id')
        .unsigned()
        .notNullable();
      table
        .foreign('student_id')
        .references('id')
        .inTable('students')
        .onDelete('CASCADE');
      table.timestamps();
    });
  }

  down() {
    this.drop('checkins');
  }
}

module.exports = CheckinSchema;
