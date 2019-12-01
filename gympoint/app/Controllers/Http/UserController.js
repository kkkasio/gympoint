'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User');

class UserController {
  async store({ request }) {
    const { permissions, roles, ...data } = request.only([
      'email',
      'password',
      'permissions',
      'roles'
    ]);

    const user = await User.create(data);

    if (roles) {
      await user.roles().attatch(roles);
    }

    if (permissions) {
      await user.permissions().attatch(permissions);
    }

    await user.save();

    await user.loadMany(['roles', 'permissions']);

    return user;
  }

  async update() {}
}

module.exports = UserController;
