const developmentConfig = require('./development');

const ENV = process.env.NODE_ENV || 'development';

const loadConfig = (env) => {
  switch (env) {
    case 'development':
      return developmentConfig;
    // Add other environments as needed
    default:
      throw new Error(`Unknown environment: ${env}`);
  }
};

const config = loadConfig(ENV);
module.exports = config;