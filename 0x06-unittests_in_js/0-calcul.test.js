const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calculateNumber", () => {
  it("should return -4 when inputs are -1 and -2.7", () => {
    assert.strictEqual(calculateNumber(-1, -2.7), -4);
  });

  it("should return -4 when inputs are -1.7 and -2", () => {
    assert.strictEqual(calculateNumber(-1.7, -2), -4);
  });

  it("floating point whole numbers", () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  it("rounding up b's floating point fractional numbers", () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  it("rounding down a and b floating point fractional numbers with trailing 9's", () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
});
