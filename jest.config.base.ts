import type { Config } from 'jest'

const config: Config = {
  verbose: true,
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.{test,spec}.{js,ts,jsx,tsx}'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/styleMock.js',
    '^@hack-timer/common/(.*)$': '<rootDir>/packages/common/src/$1',
    '^@hack-timer/web/(.*)$': '<rootDir>/packages/web/src/$1',
    '^@hack-timer/mobile/(.*)$': '<rootDir>/packages/mobile/src/$1'
  },
  moduleDirectories: ['<rootDir>/node_modules'],
  setupFilesAfterEnv: ['<rootDir>/packages/web/jest.setup.ts']
}

export default config
