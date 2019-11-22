'use strict';

const differenceInYears = use('date-fns/differenceInYears');
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Student extends Model {
  static get computed() {
    return ['age'];
  }

  getAge() {
    return differenceInYears(new Date(), this.birthday);
  }
}

module.exports = Student;
