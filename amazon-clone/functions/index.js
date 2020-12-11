const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51HwKjwCg8GPzgsZgZaZe0jb4NV5JzLQTLWRX4eU4Z6fLMsnkIAEod7lNb3MZYYXtogroHxNZ00LLYTZjUoPwqDV600OlI4vuDE")

// Set up API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"))

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment request Received for this amount >>>", total)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: "usd",
  })
  // OK - Create 
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
    
  })
})
  
// Listen command
exports.api = functions.https.onRequest(app)

// example endpoint
// http://localhost:5001/clone-93db3/us-central1/api)
