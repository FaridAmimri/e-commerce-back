/** @format */

const router = require('express').Router()
const stripe = require('stripe')(process.env.STRIPE_KEY)

router.post('/payment', (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: 'eur'
    },
    (stripeError, stripeResponse) => {
      if (stripeError) {
        res.status(500).json(stripeError)
      }
    }
  )
})

module.exports = router