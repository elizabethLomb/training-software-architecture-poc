/** @type {import('jest').Config} */
module.exports = {
  projects: [
    '<rootDir>/apps/web-app/jest.config.cjs',
    '<rootDir>/services/auth-service/jest.config.cjs',
  ],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};
