'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

const { formatDistanceToNow, parseISO, isAfter } = require('date-fns');
const { ptBR } = require('date-fns/locale');

class Inscription extends Model {
  static boot() {
    super.boot();

    this.addTrait('@provider:Timezone/Trait');
  }

  static get dates() {
    return super.dates.concat(['start_date', 'end_date']);
  }

  /* static castDates(field, value) {
    if (field === 'start_date' || field === 'end_date') {
      return value;
    }
    return value;
  } */

  static get computed() {
    return ['endDateFormated', 'active'];
  }

  getActive({ end_date }) {
    return isAfter(parseISO(end_date), new Date());
  }

  getEndDateFormated({ end_date }) {
    return formatDistanceToNow(parseISO(end_date), {
      locale: ptBR
    });
  }

  student() {
    return this.belongsTo('App/Models/Student');
  }

  plan() {
    return this.hasOne('App/Models/Plan');
  }
}

module.exports = Inscription;
