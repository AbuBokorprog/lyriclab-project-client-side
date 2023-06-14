import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../../../../Provider/AuthProvider";

const CheckoutForm = () => {
  const { user } = useContext(authContext);

  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState();
  const [clientSecret, setClientSecret] = useState();
  const selectedClass = JSON.parse(localStorage.getItem("selectedClass"));
  const { price } = selectedClass;
  console.log(price);
  useEffect(() => {
    fetch(`http://localhost:5000/create-payment-intent`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ price: price }),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data.clientSecret);
        setClientSecret(data.clientSecret);
      });
  }, [price]);

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

    const { CreateError, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (CreateError) {
      setPaymentError("[error]", CreateError);
    } else {
      setError();
      console.log("[PaymentMethod]", paymentMethod);
    }

    const { paymentIntent, error } = await stripe.confirmCardPayment(
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
    if (error) {
      console.log(error);
    }
    console.log(paymentIntent);
  };

  return (
    <div>
      <form className="" onSubmit={handleSubmit}>
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
