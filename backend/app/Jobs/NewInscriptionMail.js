'use strict';

const Mail = use('Mail');

class NewInscriptionMail {
  static get concurrency() {
    return 1;
  }

  static get key() {
    return 'NewInscriptionMail-job';
  }

  async handle({ student, inscription }) {
    console.log(`Job: ${inscription.end_date}`);

    await Mail.send(
      ['emails.new_inscription'],
      { student, inscription },
      message => {
        message
          .to(student.email)
          .from('kasio@kasio.me', 'Kásio Eduardo - GymApp')
          .subject('Confirmação da sua Inscrição');
      }
    );
  }
}

module.exports = NewInscriptionMail;
