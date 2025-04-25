import morgan, { StreamOptions } from 'morgan';
import { loggerStream } from '../lib/logger';
import { Express, Request } from 'express';

/**
 * middleware for logging HTTP requests
 */
const skippedPaths = [
  '/health',
];

const morganOptions: morgan.Options<Request, any> = {
  stream: loggerStream as StreamOptions,
  skip: (req) => skippedPaths.some((path) => req.originalUrl.includes(path)),
};

export const requestLogger = (app: Express) => {
  app.use(morgan('dev', morganOptions));
};