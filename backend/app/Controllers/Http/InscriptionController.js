'use strict';

const Kue = use('Kue');
const Job = use('App/Jobs/NewInscriptionMail');

const { addMonths, parseISO, isAfter } = require('date-fns');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Inscription = use('App/Models/Inscription');
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Plan = use('App/Models/Plan');
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Student = use('App/Models/Student');

const Database = use('Database');

class InscriptionController {
  async index() {
    const inscriptions = await Inscription.all();
    return inscriptions;
  }

  async store({ request, response }) {
    const { student_id, start_date, plan_id } = request.only([
      'student_id',
      'plan_id',
      'start_date'
    ]);

    const [hasInscription] = await Database.table('inscriptions')
      .where('student_id', student_id)
      .orderBy('created_at', 'desc')
      .limit(1);

    if (hasInscription && isAfter(hasInscription.end_date, new Date()))
      return response
        .status(400)
        .send({ message: 'This student already has an active inscription' });

    const plan = await Plan.findOrFail(plan_id);
    const student = await Student.findOrFail(student_id);
    const end_date = addMonths(parseISO(start_date), plan.duration);

    const inscription = await Inscription.create({
      student_id,
      plan_id,
      start_date: parseISO(start_date),
      end_date,
      price: plan.price
    });

    Kue.dispatch(Job.key, { student, inscription }, { attempts: 3 });

    return inscription;
  }

  async show({ params }) {
    const inscription = await Inscription.findOrFail(params.id);
    return inscription;
  }
}

module.exports = InscriptionController;
