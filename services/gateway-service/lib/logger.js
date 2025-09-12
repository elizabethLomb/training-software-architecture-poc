require('dotenv').config();
const winston = require('winston');

const LOG_LEVEL = 'http';

const logger = winston.createLogger({
  level: LOG_LEVEL,
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level.toUpperCase()}] ${message}`;
    }),
  ),
  exitOnError: false,
  transports: new winston.transports.Console(),
});

logger.info = logger.info.bind(logger);

logger.stream = {
  write: (message) => logger.info(message.substring(0, message.lastIndexOf('\n'))),
};

module.exports = logger;
