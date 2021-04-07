'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  event.init({
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    imagem: DataTypes.STRING,
    organizador: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'event',
  });
  return event;
};