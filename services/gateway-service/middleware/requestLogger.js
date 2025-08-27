import morgan, { StreamOptions } from 'morgan';
import { loggerStream } from '../lib/logger';

/**
 * middleware for logging HTTP requests
 */
module.exports = () => {
  const skippedPaths = [
    '/health',
  ];

  const options = {
    stream: loggerStream,
    skip: (req) => skippedPaths.some((path) => req.originalUrl.includes(path)),
  };

  return morgan('dev', options);
};