'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.removeColumn('Users', 'lastName');
     await queryInterface.renameColumn('Users', 'firstName', 'name');
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.renameColumn('Users', 'name', 'firstName');
     await queryInterface.addColumn('Users', 'lastName', { type: Sequelize.STRING });
  }
};
