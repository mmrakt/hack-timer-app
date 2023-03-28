import type { Config } from 'jest'

const config: Config = {
  ...require('../../jest.config.base.ts'),
  verbose: true,
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.{test,spec}.{js,ts,jsx,tsx}'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/styleMock.js',
    '^@hack-timer/common/(.*)$': '<rootDir>/../common/src/$1',
  },
  moduleDirectories: ['<rootDir>/node_modules', '../../node_modules'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']
}

export default config
