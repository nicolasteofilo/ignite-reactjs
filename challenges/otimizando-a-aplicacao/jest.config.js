module.exports = {
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  // arquivos que ele vai executar antes de executar os testes
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  moduleNameMapper: {
    "\\.(scss|css|sass)$": "identity-obj-proxy",
  },
  // indica que ambiente os testes estão executando, no caso a DOM( arvore de elementos HTML )
  testEnvironment: "jsdom",
};