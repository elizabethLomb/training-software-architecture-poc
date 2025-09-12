const morgan = require('morgan');
const logger = require('../../lib/logger');

module.exports = () => {
  const skippedPaths = [
    '/health',
  ];

  const options = {
    stream: logger.stream,
    skip: (req) => skippedPaths.some((path) => req.originalUrl.includes(path)),
  };

  return morgan('dev', options);
};

