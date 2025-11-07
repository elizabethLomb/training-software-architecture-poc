/** @type {import('jest').Config} */
module.exports = {
  projects: [
    '<rootDir>/apps/web-app/jest.config.ts',
    '<rootDir>/services/auth-service/jest.config.cjs',
    '<rootDir>/services/gateway-service/jest.config.cjs',
  ],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};
