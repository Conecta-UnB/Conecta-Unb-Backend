const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config');

let configEnv = '';

if (process.env.NODE_ENV === 'production') {
  configEnv = config.production;
} else {
  configEnv = config.development;
}
const sequelize = new Sequelize(configEnv.database, configEnv.username,
  configEnv.password, configEnv);

const User = sequelize.define('users', {
  matricula: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  role: DataTypes.INTEGER,
  nome: DataTypes.STRING,
  email: DataTypes.STRING,
  senha: DataTypes.STRING,
  telefone: DataTypes.STRING,
}, {
  sequelize,
  paranoid: true,
});

module.exports = User;
