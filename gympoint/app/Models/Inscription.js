'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

const { getUnixTime, parseISO, format, toDate } = require('date-fns');
const { ptBR } = require('date-fns/locale');

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

  static get computed() {
    return ['endDateFormated'];
  }

  getEndDateFormated({ end_date }) {
    // return formatDistance(new Date(), parseISO(end_date), { locale: ptBR });
  }

  student() {
    return this.belongsTo('App/Models/Student');
  }

  plan() {
    return this.hasOne('App/Models/Plan');
  }
}

module.exports = Inscription;
