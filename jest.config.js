// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/', '/__fixtures__/', '/__mocks__/'],

  // An object that configures minimum threshold enforcement for coverage results
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },

  setupFilesAfterEnv: ['@testing-library/jest-dom'],

  // The test environment that will be used for testing
  testEnvironment: 'jest-environment-jsdom-sixteen',

  // No transforms - just plain js
  transform: {
    '^.+\\.svelte$': 'svelte-jester',
    '^.+\\.[jt]sx?$': 'babel-jest',
  },

  moduleFileExtensions: ['js', 'svelte'],
}
