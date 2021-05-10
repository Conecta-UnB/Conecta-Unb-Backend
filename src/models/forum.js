const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config');
const User = require('./user');
const Comentario = require('./comentario');

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

const Forum = sequelize.define('forums', {
  id: {
    type: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  titulo: DataTypes.STRING,
  descricao: DataTypes.TEXT,
  id_user: DataTypes.STRING,
}, {
  sequelize,
  paranoid: true,
});

Forum.hasMany(Comentario, { foreignKey: 'id_forum' });
Forum.belongsTo(User, { foreignKey: 'id_user' });

module.exports = Forum;
