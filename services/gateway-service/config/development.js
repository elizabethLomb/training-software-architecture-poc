const developmentConfig = {
  server: {
    port: process.env.PORT || 5001,
    host: process.env.NODE_SERVER || 'http://127.0.0.1',
    env: process.env.NODE_ENV || 'development',
  },
  services: {
    'service-auth': 'http://127.0.0.1:5002'
  },
  corsOptions: {
    origin: '*',
  },
};

module.exports = developmentConfig;