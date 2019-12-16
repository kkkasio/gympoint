'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Plan extends Model {
  inscriptions() {
    return this.hasMany('App/Models/Inscriptions');
  }
}

module.exports = Plan;
