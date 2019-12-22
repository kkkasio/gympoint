'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const HelpOrder = use('App/Models/HelpOrder');
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Student = use('App/Models/Student');

/**
 * Resourceful controller for interacting with helporders
 */
class HelpOrderController {
  async index({ request, response }) {
    const helpers = await HelpOrder.query()
      .where('answer', null)
      .fetch();
    return helpers;
  }

  async store({ params, request, response }) {}

  async show({ params: { studentId }, request, response }) {
    const { id } = await Student.findOrFail(studentId);

    const helpers = await HelpOrder.query()
      .where('student_id', id)
      .fetch();

    return helpers;
  }

  async update({ params: { id }, request, response }) {
    try {
      const help = await HelpOrder.findOrFail(id);
      const data = request.only(['answer']);

      help.merge(data);
      await help.save();

      return help;
    } catch (error) {
      return response.status(400).send(error.message);
    }
  }

  async destroy({ params, request, response }) {}
}

module.exports = HelpOrderController;
