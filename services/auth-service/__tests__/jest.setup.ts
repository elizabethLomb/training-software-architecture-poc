import testingConfig from "../config/testing";

jest.mock('../src/store/db');
jest.mock('../src/utils/hash');
jest.mock('../lib/logger');
jest.mock('../config', () => ({
  ...testingConfig,
}));

jest.mock('bcryptjs', () => ({
  hash: jest.fn(),
  compare: jest.fn(),
}));
jest.mock('jsonwebtoken', () => ({
  sign: jest.fn(),
  verify: jest.fn(),
}));