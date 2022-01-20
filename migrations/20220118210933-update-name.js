'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.removeColumn('Users', 'lastName');
     await queryInterface.renameColumn('Users', 'firstName', 'name');
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.renameColumn('Users', 'name', 'firstName');
     await queryInterface.addColumn('Users', 'lastName', { type: Sequelize.STRING });
  }
};
