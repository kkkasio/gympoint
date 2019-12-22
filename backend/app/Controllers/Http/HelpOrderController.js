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
    const helpers = await HelpOrder.all();
    return helpers;
  }

  async store({ params: { studentId }, request, response }) {
    try {
      const { id } = await Student.findOrFail(studentId);

      const { question } = request.only(['question']);

      const help = await HelpOrder.create({
        student_id: id,
        question
      });

      return help;
    } catch (error) {
      return 'error';
    }
  }

  async show({ params: { studentId }, request, response }) {
    const { id } = await Student.findOrFail(studentId);

    const helpers = await HelpOrder.query()
      .where('student_id', id)
      .fetch();

    return helpers;
  }

  async update({ params, request, response }) {}

  async destroy({ params, request, response }) {}
}

module.exports = HelpOrderController;
