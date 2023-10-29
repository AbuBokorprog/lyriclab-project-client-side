import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../../../../Provider/AuthProvider";

const CheckoutForm = ({ price }) => {
  const { user } = useContext(authContext);

  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState();
  const [clientSecret, setClientSecret] = useState(null);

  //console.log(price);
  useEffect(() => {
    fetch(`http://localhost:5000/create-payment-intent`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parseFloat(price)),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.clientSecret);
        setClientSecret(data.clientSecret);
      });
  }, [price]);
  console.log(clientSecret);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    console.log(card);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setPaymentError("[error]", error);
    } else {
      setPaymentError("");
      console.log("[PaymentMethod]", paymentMethod);
      setClientSecret(paymentMethod);
    }

    const { paymentIntent, error: suberror } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.Name || "Unknown",
            email: user?.email || "Unknown",
          },
        },
      }
    );
    if (suberror) {
      console.log(suberror);
    }
    console.log(paymentIntent);
  };

  return (
    <div>
      <form className="mx-52 mt-10" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn my-4 btn-outline btn-error px-8"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {paymentError && <p>{paymentError}</p>}
    </div>
  );
};

export default CheckoutForm;
