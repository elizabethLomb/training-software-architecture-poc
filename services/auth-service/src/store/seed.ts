import fs from 'fs';
import path from 'path';
import sql from './db';
import { logger } from '../../lib/logger';

const ENV = process.env.NODE_ENV || 'development';

if (ENV !== 'test') {
  console.log('Skipping seed: not in test environment');
  process.exit(0);
}

export const execSeed = async () => {
  const seedsPath = path.join(__dirname, '../sql/v1/seeds');
  const files = fs.readdirSync(seedsPath)
    .filter(file => file.endsWith('.sql'))
    .sort();

  try {
    for (const file of files) {
      const filePath = path.join(seedsPath, file);
      const query = fs.readFileSync(filePath, 'utf-8');
      logger.info(`Executing seed: ${file}`);
      await sql.unsafe(query);
    }

    const [{ count: userCount }] = await sql<{ count: string }[]>`SELECT COUNT(*) FROM users;`;
    if (parseInt(userCount, 10) === 0) {
      logger.error('❌ Seed verification failed: users table is empty.');
      process.exit(1);
    }

    logger.info('All seeds executed successfully');
    process.exit();
  } catch (error) {
    logger.error('Error on executing the seeds:', error);
    process.exit(1);
  }
};

execSeed();