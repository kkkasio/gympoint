const bcrypt = require('bcryptjs');
const uuid = require('uuid/v4');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          id: uuid(),
          name: 'Kásio Eduardo',
          email: 'kasio@gmail.com',
          password_hash: bcrypt.hashSync('123456', 8),
          is_admin: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  /* down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('People', null, {});

  }, */
};
