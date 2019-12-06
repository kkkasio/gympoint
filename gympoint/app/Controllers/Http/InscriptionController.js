'use strict';

// import { ptBR } from 'date-fns/locale';

const { addMonths, parseISO } = require('date-fns');

const Mail = use('Mail');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Inscription = use('App/Models/Inscription');
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Plan = use('App/Models/Plan');
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Student = use('App/Models/Student');

class InscriptionController {
  async index() {
    const inscriptions = await Inscription.all();
    return inscriptions;
  }

  async store({ request }) {
    const { student_id, start_date, plan_id } = request.only([
      'student_id',
      'plan_id',
      'start_date'
    ]);

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

    await Mail.send(
      ['emails.new_inscription'],
      { student, inscription },
      message => {
        message
          .to(student.email)
          .from('kasio@kasio.me', 'Equipe | Gymapp')
          .subject('Sua Matricula');
      }
    );

    return inscription;
  }
}

module.exports = InscriptionController;
