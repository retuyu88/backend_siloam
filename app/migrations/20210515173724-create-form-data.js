'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('FormData', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      full_name: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      dob: {
        type: Sequelize.DATE
      },
      email: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      visited_hosp: {
        type: Sequelize.STRING
      },
      pcr_antigen: {
        type: Sequelize.BOOLEAN
      },
      fever_history: {
        type: Sequelize.BOOLEAN
      },
      breathing_difficulty: {
        type: Sequelize.BOOLEAN
      },
      cough_history: {
        type: Sequelize.BOOLEAN
      },
      runny_nose: {
        type: Sequelize.BOOLEAN
      },
      losing_smell: {
        type: Sequelize.BOOLEAN
      },
      losing_taste: {
        type: Sequelize.BOOLEAN
      },
      body_aches: {
        type: Sequelize.BOOLEAN
      },
      vomit: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('FormData');
  }
};