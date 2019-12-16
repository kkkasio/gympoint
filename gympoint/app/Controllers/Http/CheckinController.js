'use strict';

const { subDays, isToday } = require('date-fns');
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Checkin = use('App/Models/Checkin');
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Student = use('App/Models/Student');

const Database = use('Database');

/**
 * Resourceful controller for interacting with checkins
 */
class CheckinController {
  async index({ request, response }) {}

  async store({ request, response }) {
    const { student_id } = request.only(['student_id']);

    const student = await Student.findOrFail(student_id);

    const [data] = await Database.table('checkins')
      .where('student_id', student.id)
      .orderBy('created_at', 'desc')
      .limit(1);

    if (isToday(data.created_at)) {
      return response
        .status(401)
        .send({ message: 'You already checked in today' });
    }

    const beforeDate = subDays(new Date(), 7);

    const countCheckins = await Checkin.query()
      .where('student_id', student.id)
      .whereBetween('created_at', [beforeDate, new Date()])
      .getCount();

    if (countCheckins > 5) {
      return response
        .status(400)
        .send({ message: 'You exceeded the limit of checkins!' });
    }
    const checkin = await Checkin.create({
      student_id
    });

    return checkin;
  }

  async show({ params: { studentId }, request, response }) {
    const checkins = await Checkin.query()
      .where('student_id', studentId)
      .orderBy('created_at', 'desc')
      .fetch();
    return checkins;
  }

  async update({ params, request, response }) {}

  async destroy({ params, request, response }) {}
}

module.exports = CheckinController;
