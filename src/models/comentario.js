const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config');
const User = require('./user');

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

const Comentario = sequelize.define('comentarios', {
  id: {
    type: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  id_user: DataTypes.STRING,
  id_forum: DataTypes.UUIDV4,
  conteudo: DataTypes.TEXT,
}, {
  sequelize,
  paranoid: true,
});
Comentario.belongsTo(User, { foreignKey: 'id_user' });

module.exports = Comentario;
