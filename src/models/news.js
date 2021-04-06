const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config');

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const News = sequelize.define('News', {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  titulo: DataTypes.STRING,
  conteudo: DataTypes.STRING,
  id_user: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  autor: DataTypes.STRING,
}, {
  sequelize,
  paranoid: true,
});

module.exports = News;
