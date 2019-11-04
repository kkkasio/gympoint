module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('plans', 'canceled_at', {
      type: Sequelize.DATE,
      defaultValue: null,
    });
  },

  /* down: (queryInterface, Sequelize) => {

      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');

  }, */
};
