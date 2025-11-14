require('dotenv').config();

const postgres = require('postgres');
const logger = require('../../lib/logger');
const config = require('../../config');

const connectionString = config.databases.postgreSql.connectionString;
const isDevelopment = config.server.env === 'development';

if (!process.env.DATABASE_URL) {
  logger.error('❌ DATABASE_URL is missing');
  process.exit(1);
}

const sql = postgres(connectionString, {
  ssl: 'require',
  ...(isDevelopment && {
    debug: (...args) => console.log('📦 SQL Debug:', ...args),
  }),
});

module.exports = sql;