const fs = require('fs');
const path = require('path');
const sql = require('./db');
const logger = require('../../lib/logger');

async function execMigrations() {
  const migrationsPath = path.join(__dirname, '../sql/v1/migrations');
  const files = fs.readdirSync(migrationsPath).filter(file => file.endsWith('.sql'));

  try {
    for (const file of files) {
      const filePath = path.join(migrationsPath, file);
      const query = fs.readFileSync(filePath, 'utf-8');
      logger.info(`Executing migration: ${file}`);
      await sql.unsafe(query);
    }

    logger.info('All migrations executed successfully');
    process.exit(0);
  } catch (error) {
    logger.error('Error on executing the migrations:', error);
    process.exit(1);
  }
}

module.exports = { execMigrations };

if (require.main === module) {
  execMigrations();
}