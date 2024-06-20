const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber", function () {
  it("should add two numbers", function () {
    assert.strictEqual(calculateNumber("SUM", 1.4, 4.5), 6);
  });

  it("equal positive numbers (alternate)", () => {
    assert.strictEqual(calculateNumber("SUM", 2.3, 1.8), 4);
  });

  it("equal negative numbers", () => {
    assert.strictEqual(calculateNumber("SUM", -2.0, -2.0), -4);
  });

  it("should subtract two numbers", function () {
    assert.strictEqual(calculateNumber("SUBTRACT", 1.4, 4.5), -4);
  });

  it("negative and positive numbers", () => {
    assert.strictEqual(calculateNumber("SUBTRACT", -2.0, 2.0), -4.0);
  });

  it("positive and negative numbers", () => {
    assert.strictEqual(calculateNumber("SUBTRACT", 2.0, -2.0), 4.0);
  });

  it("should divide two numbers", function () {
    assert.strictEqual(calculateNumber("DIVIDE", 1.4, 4.5), 0.2);
  });

  it("numbers with different signs (alternate)", () => {
    assert.strictEqual(calculateNumber("DIVIDE", 7.0, -2.0), -3.5);
  });

  it("negative numbers", () => {
    assert.strictEqual(calculateNumber("DIVIDE", -7.0, -2.0), 3.5);
  });

  it("should return Error when dividing by zero", function () {
    assert.strictEqual(calculateNumber("DIVIDE", 1.4, 0), "Error");
  });
});
