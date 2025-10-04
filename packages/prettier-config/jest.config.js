module.exports = {
  testEnvironment: "node",
  testMatch: ["**/*.test.js"],
  collectCoverageFrom: ["*.js", "!*.config.js", "!*.test.js"],
  transformIgnorePatterns: ["node_modules/(?!prettier)"],
};
