'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class HelpOrder extends Model {
  student() {
    return this.belongsTo('App/Models/Student');
  }
}

module.exports = HelpOrder;
