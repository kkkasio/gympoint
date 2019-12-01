'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Role = use('Role');

class RoleController {
  async index() {
    const roles = Role.query()
      .with('permissions')
      .fetch();

    return roles;
  }

  async show({ params }) {
    const role = await Role.findOrFail(params.id);
    await role.load('permissions');

    return role;
  }

  async update({ request, params }) {
    const { permission, ...data } = request.only([
      'name',
      'slug',
      'description',
      'permissions'
    ]);

    const role = await Role.findOrFail(params.id);
    role.merge(data);

    await role.save();

    if (permissions) {
      await role.permissions().sync(permissions);
    }

    await role.load('permissions');
    return role;
  }

  async store({ request }) {
    const { permission, ...data } = request.only([
      'name',
      'slug',
      'description',
      'permissions'
    ]);

    const role = await Role.create(data);

    if (permissions) {
      await role.permissions().attatch(permissions);
    }

    await role.load('permissions');
    return role;
  }

  async destroy({ params }) {
    const role = Role.findOrFail(params.id);
    await role.delete();
  }
}

module.exports = RoleController;
