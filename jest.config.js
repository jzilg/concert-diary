module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!src/**/index.ts',
        '!src/redux/store.ts',
        '!src/redux/applyDevtoolExtension.ts',
    ],
    moduleFileExtensions: [
        'js',
        'jsx',
        'json',
        'node',
        'ts',
        'tsx',
    ],
    moduleNameMapper: {
        '\\.(scss)$': '<rootDir>/node_modules/jest-css-modules',
        '\\.(svg)$': '<rootDir>/test/empty-module.js',
    },
    setupFiles: [
        '<rootDir>/enzyme.config.js',
    ],
    testMatch: [
        '<rootDir>/src/**/*.test.jsx',
        '<rootDir>/src/**/*.test.js',
    ],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
        '^.+\\.tsx?$': 'ts-jest',
    },
}
