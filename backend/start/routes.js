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
Route.post('sessions', 'SessionController.store');

Route.group(() => {
  Route.resource('permission', 'PermissionController').apiOnly();
  Route.resource('roles', 'RoleController').apiOnly();

  Route.resource('students', 'StudentController')
    .apiOnly()
    .validator('Student');

  Route.resource('inscriptions', 'InscriptionController').apiOnly();

  Route.resource('plans', 'PlanController').apiOnly();
}).middleware('auth' /* ['', 'is:administrator'] */);

Route.post('checkins', 'CheckinController.store');
Route.get('students/:studentId/checkins', 'CheckinController.show');
