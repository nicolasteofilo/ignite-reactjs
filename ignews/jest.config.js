module.exports = {
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  // arquivos que ele vai executar antes de executar os testes
  setupFilesAfterEnv: [
    "<rootDir>/src/tests/setupTests.ts"
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
  },
  // indica que ambiente os testes estão executando, no caso a DOM( arvore de elementos HTML )
  testEnvironment: 'jsdom',
};