const { createLogger, format, transports } = require('winston');

const LOG_LEVEL = 'http';

const logger = createLogger({
  level: LOG_LEVEL,
  format: format.combine(
    format.timestamp(),
    format.printf(({ level, message, timestamp }) => {
      return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
    })
  ),
  exitOnError: false,
  transports: [
    new transports.Console(),
  ],
});

logger.stream = {
  write: (message) => logger.info(message.substring(0, message.lastIndexOf('\n'))),
};

module.exports = logger;