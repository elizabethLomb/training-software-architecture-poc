require('dotenv').config();

const developmentConfig = {
  server: {
    port: process.env.PORT || 5000,
    host: process.env.NODE_SERVER || 'http://127.0.0.1',
    env: process.env.NODE_ENV || 'development',
  },
  services: {
    serviceAuth: 'http://127.0.0.1:5001',
  },
  corsOptions: {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Origin', 'Content-Type', 'Authorization', 'Cache-Control'],
  },
  rateLimiting: {
    enabled: false,
    headers: false,
    windowMs: 3600000
  },
};

module.exports = developmentConfig;