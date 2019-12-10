'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Inscription extends Model {
  static get dates() {
    return super.dates.concat(['start_date', 'end_date']);
  }

  static castDates(field, value) {
    if (field === 'start_date' || field === 'end_date') {
      return value.format('DD-MM-YYYY');
    }
    return value;
  }

  student() {
    return this.belongsTo('App/Models/Student');
  }
}

module.exports = Inscription;
