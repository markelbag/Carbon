import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from 'carbon-components-react';

let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_test_51HTFfqJIuG4AzTsAYJAAJgXTTTRhAjmtU2bPsuU9JXomRSvGWS4NfgXKtfm2nuvaUzA7OELlaRIHlFshO7N5qgfr005cRH6Vro")
  }
  return stripePromise
}
const IntroToFencing = () => {
  const [setLoading] = useState(false)
  const redirectToCheckout = async event => {
    event.preventDefault()
    setLoading(true)
    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: "subscription",
      lineItems: [
        {price: "price_1IIDA0JIuG4AzTsA2uKYiinl", quantity: 1 }],
      successUrl: `http://localhost:8000/page-2/`,
      cancelUrl: `http://localhost:8000/`,
    })
    if (error) {
      console.warn("Error:", error)
      setLoading(false)
    }
  }
  return (
    <Button
    className="btn"
    kind="secondary"

      onClick={redirectToCheckout}
    >
      SIGN UP
    </Button>
  )
}
export default IntroToFencing