export const logger = {
  info: jest.fn(),
  error: jest.fn(),
  http: jest.fn(),
  warn: jest.fn(),
  debug: jest.fn(),
};

export const loggerStream = {
  write: jest.fn(),
};