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

const Event = sequelize.define('events', {
  titulo: DataTypes.STRING,
  descricao: DataTypes.STRING,
  imagem: DataTypes.STRING,
  organizador: DataTypes.STRING,
}, {
  sequelize,
  paranoid: true,
});

module.exports = Event;
