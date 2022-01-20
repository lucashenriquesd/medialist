'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'uuid', {
      allowNull: false,
      type: Sequelize.UUID 
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'uuid');
  }
};
