import React from "react";
import SetTitle from "../../../../../SetTitle";
import { Helmet } from "react-helmet-async";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
//TODO
const stripePromise = loadStripe(import.meta.env.VITE_PK);
const Payment = () => {
  const selectedClass = JSON.parse(localStorage.getItem("selectedClass"));
  const price = selectedClass.price;

  return (
    <div>
      <Helmet>
        <title>LyricLab || Payment</title>
      </Helmet>
      <SetTitle title="Payment"></SetTitle>
      <div className="mx-44">
        <p>
          Securely make payments for our premium music courses and unlock a
          world of musical possibilities. Start your musical journey today!
        </p>
      </div>
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
