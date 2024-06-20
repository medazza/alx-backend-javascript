const sinon = require("sinon");
const sendPaymentRequestToApi = require("./5-payment");

describe("sendPaymentRequestToApi", function () {
  let SSpy;

  beforeEach(function () {
    SSpy = sinon.spy(console, "log");
  });

  afterEach(function () {
    SSpy.restore();
  });

  it('logs "The total is: 120" to the console', function () {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledOnceWithExactly(SSpy, "The total is: 120");
  });

  it('logs "The total is: 20" to the console', function () {
    sendPaymentRequestToApi(10, 10);
    sinon.assert.calledOnceWithExactly(SSpy, "The total is: 20");
  });
});
