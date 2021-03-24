const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors")
const stripe = require("stripe")("sk_test_51IYDPfDRE9rXjrGwWvS1iiJsRCTvSiasO3jMRy9IbY2Mu0RbpqoJSK4P7XsJVbE8rTR9qTAOvZVKUSJtsjpa5G6y00em1WlJx6")

//API 

// - App Config
const app = express()

// - MiddleWares
app.use(cors({ origin: true }))
app.use(express.json())

// - Api routes
app.get('/', (request, response) => response.status(200).send
('Hello World'))

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  console.log('Payment request received', total)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd"
  })

  //Ok - created
  response.status(201).send ({
    clientSecret: paymentIntent.client_secret,
  })
})

// - Listen
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://localhost:5001/challenge-fe366/us-central1/api