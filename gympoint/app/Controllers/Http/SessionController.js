'use strict';

/** @type {typeof import('@adonisjs/auth')} */

class SessionController {
  async store({ request, auth }) {
    const { email, password } = request.all();

    const token = auth.attempt(email, password);

    return token;
  }
}

module.exports = SessionController;
