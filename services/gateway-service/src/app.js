const express = require('express');
// const cors = require('./middlewares/cors');
// const requestLogger = require('./middlewares/requestLogger');
// const config = require('../config');

// const app = express();
// const port = config.server.port;
// const server = config.server.host;

// app.use(cors());
// app.use(express.json());

// requestLogger(app);
// // app.use('/api/getaway', authRoutes);
// // app.use('/api/health', healthcheckRouter);
const initApp = (context) => {
  const app = express();

  return app;
};

module.exports = initApp;