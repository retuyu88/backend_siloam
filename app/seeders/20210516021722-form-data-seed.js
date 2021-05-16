'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('FormData', [{
      full_name: "santoso",
      gender: "male",
      dob: new Date(1980, 6, 20),
      email: 'johnDoe@test.com',
      phone: "081312452132",
      visited_hosp: "testbranch",
      pcr_antigen: true,
      fever_history: false,
      breathing_difficulty: true,
      cough_history: true,
      runny_nose: true,
      losing_smell: true,
      losing_taste: true,
      body_aches: true,
      vomit: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
