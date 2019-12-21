'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PlanSchema extends Schema {
  up() {
    this.create('plans', table => {
      table.increments();
      table.string('title', 255);
      table.integer('duration', 5, 2);
      table.float('price');
      table.timestamps();
    });
  }

  down() {
    this.drop('plans');
  }
}

module.exports = PlanSchema;
