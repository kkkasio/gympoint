'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/')}  */

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Plan = use('App/Models/Plan');
/**
 * Resourceful controller for interacting with plans
 */
class PlanController {
  async index({ request, response }) {
    const plans = await Plan.all();
    return plans;
  }

  async store({ request, response }) {
    const data = request.only(['title', 'duration', 'price']);

    const plan = await Plan.create(data);

    return plan;
  }

  async show({ params, request, response }) {
    const plan = await Plan.findOrFail(params.id);
    return plan;
  }

  async update({ params, request, response }) {
    const data = request.only(['title', 'duration', 'price']);

    const plan = await Plan.findOrFail(params.id);

    plan.merge(data);
    await plan.save();

    return plan;
  }

  async destroy({ params, response }) {
    const plan = await Plan.findOrFail(params.id);
    await plan.delete();
  }
}

module.exports = PlanController;
