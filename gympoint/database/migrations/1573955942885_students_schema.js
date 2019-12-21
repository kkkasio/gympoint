'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class StudentsSchema extends Schema {
  up() {
    this.create('students', table => {
      table.increments();
      table.string('name', 254);
      table
        .string('email', 254)
        .notNullable()
        .unique();
      table.timestamp('birthday').notNullable();
      table.string('weight').notNullable();
      table.string('height').notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('students');
  }
}

module.exports = StudentsSchema;
