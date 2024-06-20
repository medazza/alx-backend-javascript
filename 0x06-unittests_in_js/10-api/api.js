const express = require("express");

const app = express();
const PORT = 7865;

app.get("/", (_, res) => {
  res.send("Welcome to the payment system");
});

app.get("/cart/:id([0-9]+)", (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`);
});

app.get("/available_payments", (req, res) => {
  res.set("Content-Type", "application/json");
  const paymentOptions = {
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  };
  res.send(paymentOptions);
});

app.post("/login", (req, res) => {
  const username = req.body.user || req.body.userName;
  if (username) {
    res.send(`Welcome ${username}`);
  } else {
    res.status(404).send();
  }
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
