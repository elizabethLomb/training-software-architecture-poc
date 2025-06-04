import postgres from 'postgres';
import dotenv from 'dotenv';
import { logger } from '../../lib/logger';

dotenv.config();

const connectionString = process.env.DATABASE_URL;
const isDevelopment = process.env.NODE_ENV === 'development';

if (!process.env.DATABASE_URL) {
  logger.error('❌ DATABASE_URL is missing');
  process.exit(1);
}

const sql = postgres(connectionString!, {
  ssl: 'require',
  ...(isDevelopment && {
    debug: (...args) => console.log('📦 SQL Debug:', ...args),
  }),
});

export default sql;