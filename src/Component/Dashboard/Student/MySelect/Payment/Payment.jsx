import React from "react";
import SetTitle from "../../../../../SetTitle";
import { Helmet } from "react-helmet-async";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
//TODO
const stripePromise = loadStripe(import.meta.env.VITE_PK);
const Payment = () => {
  return (
    <div>
      <Helmet>
        <title>LyricLab || Payment</title>
      </Helmet>
      <SetTitle title="Payment"></SetTitle>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, suscipit.
      </p>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Payment;
