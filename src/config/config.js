require('dotenv/config');

module.exports = {
  development: {
    dialect: process.env.DB_DIALECT || 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    operatorAliases: 'false',
    logging: false,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  },
  test: {
    dialect: 'sqlite',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    storage: './tests/database.sqlite',
    operatorAliases: 'false',
    logging: false,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  },
  production: {
    dialect: 'postgres',
    username: 'postgres',
    host: 'dokku-postgres-db',
    password: process.env.DOKKU_POSTGRES_DB_ENV_POSTGRES_PASSWORD,
    database: 'db',
    operatorAliases: 'false',
    logging: false,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  },
  // extra db config
};
