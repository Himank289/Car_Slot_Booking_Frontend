// jest.config.js
module.exports = {
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest', // Transform JavaScript/JSX files using Babel
      '^.+\\.(ts|tsx)$': 'ts-jest',     // Transform TypeScript/TSX files using ts-jest
    },
    transformIgnorePatterns: [
      '/node_modules/(?!(axios|other-package-to-transform)/)', // Specify packages that need transformation
    ],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
    testEnvironment: 'jsdom',
  };
  