module.exports = {
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'json',
  ],
  moduleNameMapper: {
    "^[./a-zA-Z0-9$_-]+\\.png$": "<rootDir>/RelativeImageStub.js",
    "\\.(css|less|sass|scss)$": "<rootDir>/RelativeImageStub.js",
  },
  testMatch: [
    '**/**/*.test.+(ts|tsx|js)',
  ],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig-jest.json',
    },
  },
  transform: {
    "^.+\\.(t|j)sx?$": "ts-jest",
  },
  setupFilesAfterEnv: [
    "<rootDir>/setupTests.js",
    "jest-canvas-mock"
  ],
  resetMocks: true,
  testPathIgnorePatterns: [
    '/node_modules/',
    'dist',
    'typings',
    'templates',
  ],
  transformIgnorePatterns: ["node_modules/(?!(@bb-ui))"],
  "snapshotSerializers": ["enzyme-to-json/serializer"],
};
