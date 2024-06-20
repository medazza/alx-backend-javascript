const expect = require("chai").expect;
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber", function () {
  it("should add two numbers", function () {
    expect(calculateNumber("SUM", 1.4, 4.5)).to.equal(6);
  });

  it("negative and positive numbers", () => {
    expect(calculateNumber("SUM", -2.0, 2.0)).to.equal(0);
  });

  it("positive and negative numbers", () => {
    expect(calculateNumber("SUM", 2.0, -2.0)).to.equal(0);
  });

  it("should subtract two numbers", function () {
    expect(calculateNumber("SUBTRACT", 1.4, 4.5)).to.equal(-4);
  });

  it("negative and positive numbers", () => {
    expect(calculateNumber("SUBTRACT", -2.0, 2.0)).to.equal(-4.0);
  });

  it("positive and negative numbers", () => {
    expect(calculateNumber("SUBTRACT", 2.0, -2.0)).to.equal(4.0);
  });

  it("should divide two numbers", function () {
    expect(calculateNumber("DIVIDE", 1.4, 4.5)).to.equal(0.2);
  });

  it("negative numbers", () => {
    expect(calculateNumber("DIVIDE", -7.0, -2.0)).to.equal(3.5);
  });

  it("equal positive numbers", () => {
    expect(calculateNumber("DIVIDE", 2.0, 2.0)).to.equal(1);
  });

  it("should return Error when dividing by zero", function () {
    expect(calculateNumber("DIVIDE", 1.4, 0)).to.equal("Error");
  });
});
