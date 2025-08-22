import { ConfigProps } from '../src/models/v1/Config';
import dotenv from 'dotenv';
dotenv.config();

const testingConfig: ConfigProps = {
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
  jwt: {
    secret: 'fallback_test_secret',
  },
};

export default testingConfig;