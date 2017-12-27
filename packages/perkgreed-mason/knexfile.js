let config;
try {
  // eslint-disable-next-line
  config = require('./db/config');
} catch (error) {
  // eslint-disable-next-line
  console.error('Database configuration needed. Please see README for instructions.');
  throw error;
}

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      database: config.development.database,
      user: config.development.user,
      password: config.development.password,
    },
    pool: {
      min: 2,
      max: 10,
    },
  },

  production: {
    client: 'mysql2',
    connection: {
      database: config.production.database,
      user: config.production.user,
      password: config.production.password,
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
};
