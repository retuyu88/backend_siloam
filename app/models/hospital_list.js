'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hospital_list extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Hospital_list.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Hospital_list',
  });
  return Hospital_list;
};