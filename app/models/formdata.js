'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FormData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  FormData.init({
    full_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    dob: DataTypes.DATE,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    visited_hosp: DataTypes.STRING,
    pcr_antigen: DataTypes.BOOLEAN,
    fever_history: DataTypes.BOOLEAN,
    breathing_difficulty: DataTypes.BOOLEAN,
    cough_history: DataTypes.BOOLEAN,
    runny_nose: DataTypes.BOOLEAN,
    losing_smell: DataTypes.BOOLEAN,
    losing_taste: DataTypes.BOOLEAN,
    body_aches: DataTypes.BOOLEAN,
    vomit: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'FormData',
  });
  return FormData;
};