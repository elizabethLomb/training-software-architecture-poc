import developmentConfig from './development';
import testingConfig from './testing';

const ENV = process.env.NODE_ENV || 'development';

const loadConfig = (env: string) => {
  switch (env) {
    case 'test':
      return testingConfig;
    case 'development':
      return developmentConfig;
    // Add other environments as needed
    default:
      throw new Error(`Unknown environment: ${env}`);
  }
};

const config = loadConfig(ENV);
export default config;