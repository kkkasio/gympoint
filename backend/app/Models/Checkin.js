'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Checkin extends Model {
  students() {
    return this.belongsTo('App/Models/Student');
  }
}

module.exports = Checkin;
