module.exports = {
  verbose: true,
  roots: ['<rootDir>/src/'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/?(*)+(test).ts'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  coverageReporters: ['text-summary', 'html'],
  moduleNameMapper: {
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@test-utils/(.*)$': '<rootDir>/src/test-utils/$1',
  },
};
