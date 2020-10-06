'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class calendar_data extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  calendar_data.init({
    title: DataTypes.STRING,
    start: DataTypes.STRING,
    end: DataTypes.STRING,
    allDay: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'calendar_data',
  });
  return calendar_data;
};