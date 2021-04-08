const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config');

let configEnv = '';

if (process.env.NODE_ENV === 'production') {
  configEnv = config.production;
} else if (process.env.NODE_ENV === 'test') {
  configEnv = config.test;
} else {
  configEnv = config.development;
}

const sequelize = new Sequelize(configEnv.database, configEnv.username,
  configEnv.password, configEnv);

const News = sequelize.define('News', {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  titulo: DataTypes.STRING,
  imagem: DataTypes.STRING,
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
