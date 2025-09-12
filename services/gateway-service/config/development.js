const developmentConfig = {
  server: {
    port: process.env.PORT || 5001,
    host: process.env.NODE_SERVER || 'http://127.0.0.1',
    env: process.env.NODE_ENV || 'development',
  },
  services: {
    'service-auth': 'http://auth-service:5001/api/v1'
  },
  corsOptions: {
    origin: '*',
  },
};

module.exports = developmentConfig;