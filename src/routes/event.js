const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config');

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const User = sequelize.define('Event', {
  tit: {
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