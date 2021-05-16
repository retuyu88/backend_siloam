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
     return queryInterface.bulkInsert('Hospital_lists', [{
      name: "BIMC Hospital Kuta",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "BIMC Hospital Nusa Dua",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "MRCCC Siloam Hospitals Semanggi",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "RSU Syubbanul Wathon",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Rumah Sakit Umum Siloam Kelapa Dua",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: "Rumah Sakit Umum Siloam Lippo Village",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: "Siloam Hospital Balikpapan",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: "Siloam Hospital Bangka Belitung",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: "Siloam Hospital Bogor",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: "Siloam Hospital Cinere",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: "Siloam Hospital Cirebon",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: "Siloam Hospitals Denpasar",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: "Siloam Hospitals Jambi",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: "Siloam Hospitals Kebon Jeruk",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: "Siloam Hospitals Lippo Cikarang",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: "Siloam Hospitals Lippo Village",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: "Siloam Hospitals Makassar",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: "Siloam Hospitals Manado",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: "Siloam Hospitals Mataram",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: "Siloam Hospitals Medan",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: "Siloam Hospitals Palangkaraya",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: "Siloam Hospitals Semarang",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: "Siloam Hospitals Surabaya",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: "Siloam Hospitals TB Simatupang",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: "Siloam Hospitals Yogyakarta",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: "Siloam Sriwijaya Palembang",
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
