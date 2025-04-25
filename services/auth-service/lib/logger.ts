import winston from 'winston'

const LOG_LEVEL = 'http';

const logger = winston.createLogger({
  level: LOG_LEVEL,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ level, message, timestamp }) => {
      return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
    })
  ),
  exitOnError: false,
  transports: [
    new winston.transports.Console(),
  ],
});

const loggerStream = {
  write: (message: string) => {
    logger.http(message.trim());
  },
};

export { logger, loggerStream };