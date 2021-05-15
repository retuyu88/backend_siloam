module.exports = (sequelize, Sequelize) => {
    const FormSubmit = sequelize.define("formSubmit", {
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

    })
}