'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.get('/', () => {
  return { version: '1.1.0' };
});

Route.post('users', 'UserController.store').validator('User');

Route.group(() => {
  Route.resource('permission', 'PermissionController').apiOnly();
  Route.resource('roles', 'RoleController').apiOnly();

  Route.resource('students', 'StudentController')
    .apiOnly()
    .validator('Student');
}).middleware(['auth', 'is:administrator']);
