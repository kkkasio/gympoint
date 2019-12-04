'use strict';

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

class DatabaseSeeder {
  async run() {
    const user = await Factory.model('App/Models/User').create();
    console.log(user);
  }
}

module.exports = DatabaseSeeder;
