'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class HelpOrderSchema extends Schema {
  up() {
    this.create('help_orders', table => {
      table.increments();
      table
        .integer('student_id')
        .unsigned()
        .notNullable();
      table.text('question');
      table.text('answer');
      table.timestamp('answer_at');
      table.timestamps();
    });
  }

  down() {
    this.drop('help_orders');
  }
}

module.exports = HelpOrderSchema;
