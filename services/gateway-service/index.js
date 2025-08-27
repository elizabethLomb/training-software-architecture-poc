require('dotenv').config();

const initApp = require('./src/app');
const config = require('./config');
const http = require('http');
const logger = require('./lib/logger');

const PORT = config.server.port;

const startServer = async (context) => {
  try {
    const app = initApp(context);
    const server = http.createServer(app);
    server.on('error', logger.error);
    server.listen(PORT, () => {
      logger.info(`listening on port ${PORT}!`);
    });
  } catch (error) {
    logger.error(error.stack);
  }
};

startServer();

process.on('unhandledRejection', (reason, promise) => {
  logger.error('Unhandled Rejection at:', reason.stack || reason, 'Promise: ', promise);
});

process.on('uncaughtException', (error) => {
  logger.error('Uncaught exception: ', error.message);
  logger.error('Uncaught exception stack: ', error.stack);
});
