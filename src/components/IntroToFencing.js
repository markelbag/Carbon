import React, { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
const buttonStyles = {
  marginLeft: "24px",
  height: "20px",
  fontSize: "13px",
  textAlign: "center",
  color: "#20110A",
  padding: "0px 60px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: "#FBA914",
  borderRadius: "6px",
  letterSpacing: "1.5px",
}
const buttonDisabledStyles = {
  opacity: "0.5",
  cursor: "not-allowed",
}
let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_test_51HTFfqJIuG4AzTsAYJAAJgXTTTRhAjmtU2bPsuU9JXomRSvGWS4NfgXKtfm2nuvaUzA7OELlaRIHlFshO7N5qgfr005cRH6Vro")
  }
  return stripePromise
}
const IntroToFencing = () => {
  const [loading, setLoading] = useState(false)
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
    <button
      disabled={loading}
      style={
        loading ? { ...buttonStyles, ...buttonDisabledStyles } : buttonStyles
      }
      onClick={redirectToCheckout}
    >
      SIGN UP
    </button>
  )
}
export default IntroToFencing