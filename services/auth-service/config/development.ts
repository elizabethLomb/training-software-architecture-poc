import { ConfigProps } from '../src/models/v1/Config';
import dotenv from 'dotenv';
dotenv.config();

const developmentConfig: ConfigProps = {
  server: {
    port: process.env.PORT || 5002,
    host: process.env.NODE_SERVER || 'http://127.0.0.1',
    env: process.env.NODE_ENV || 'development',
  },
  databases: {
    postgreSql: {
      connectionString: process.env.DATABASE_URL || 'postgres://user:password@localhost:5432/auth_service',
    },
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'fallback_dev_secret',
  },
};

export default developmentConfig;