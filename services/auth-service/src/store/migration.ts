import fs from 'fs';
import path from 'path';
import sql from './db';
import { logger } from '../../lib/logger';

export const execMigrations = async () => {
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
    process.exit();
  } catch (error) {
    logger.error('Error on executing the migrations:', error);
    process.exit(1);
  }
};

execMigrations();