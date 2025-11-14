require('dotenv').config();

const testingConfig = {
  server: {
    port: 4001,
    host: 'http://localhost',
    env: 'test',
  },
  databases: {
    postgreSql: {
      connectionString: 'postgres://test:test@localhost:5434/test_db',
    },
  },
};

module.exports = testingConfig;