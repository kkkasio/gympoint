'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Checkin = use('App/Models/Checkin');

/**
 * Resourceful controller for interacting with checkins
 */
class CheckinController {
  async index({ request, response }) {}

  async store({ request, response }) {
    const data = request.only(['student_id']);

    const checkin = await Checkin.create(data);

    return checkin;
  }

  async show({ params, request, response }) {}

  async update({ params, request, response }) {}

  async destroy({ params, request, response }) {}
}

module.exports = CheckinController;
