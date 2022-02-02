module.exports = {
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  // arquivos que ele vai executar antes de executar os testes
  setupFilesAfterEnv: [
    "<rootDir>/src/configs/setupTests.ts"
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
  },
  // indica que ambiente os testes estão executando, no caso a DOM( arvore de elementos HTML )
  testEnvironment: 'jsdom',

  moduleNameMapper: {
    "\\.(scss|css|sass)$": "identity-obj-proxy"
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.tsx",
    "!src/**/*.spec.tsx",
    "!src/**/_app.tsx",
    "!src/**/_document.tsx",
  ],
  coverageReporters: ["lcov", "json"]
};