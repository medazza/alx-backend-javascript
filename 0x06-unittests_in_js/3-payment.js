const Utils = require("./utils.js");

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const totalCost = Utils.calculateNumber("SUM", totalAmount, totalShipping);
  console.log(`The total is: ${totalCost}`);
}

module.exports = sendPaymentRequestToApi;
