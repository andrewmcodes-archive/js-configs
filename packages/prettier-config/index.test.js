const config = require("./index");

describe("Prettier Configuration", () => {
  test("config object has printWidth property set to 120", () => {
    expect(config.printWidth).toBe(120);
  });

  test("config object is exported correctly", () => {
    expect(config).toBeDefined();
    expect(typeof config).toBe("object");
  });
});
