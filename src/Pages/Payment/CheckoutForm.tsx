import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ButtonSpinner from "../../Shared/ButtonSpinner/ButtonSpinner";

const CheckoutForm = ({ userInfo }: any) => {
  const stripe: any = useStripe();
  const elements: any = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [goForward, setGoForward] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const price = 99.95;
  const { _id, name, email } = userInfo;
  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [price]);

  const handleSubmit = async (event: any) => {
    event?.preventDefault();
    if (!stripe || elements) {
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
    setSuccess("");
    setProcessing(true);
    // confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });
    if (intentError) {
      setCardError(intentError?.message);
      setProcessing(false);
    } else {
      setCardError("");
      // Store Info on database
      const payment = {
        orderId: _id,
        transactionId: paymentIntent.id,
      };
      fetch(`http://localhost:5000/user/${email}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.$set?.paymentStatus === true) {
            setProcessing(false);
            setTransactionId(paymentIntent.id);
            setSuccess("Congrats! your payment is completed");
            setGoForward(true);
          }
        });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
        <div className="mt-5">
        {processing ? (
          <ButtonSpinner />
        ) : (
          <button
            className="bg-blue-500 text-white px-5 py-2 rounded"
            type="submit"
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
        )}

        </div>
      </form>
      {cardError && <p className="text-error">{cardError}</p>}
      {success && (
        <div className="text-green-500">
          <p>{success}</p>
          <p>
            Your transaction id:{" "}
            <span className="text-orange-600 font-bold">{transactionId}</span>
          </p>
        </div>
      )}
      {goForward && (
        <Link className="" to="/dashboard">
          <button className="bg-blue-500 text-white px-7 py-2 mt-4 w-full rounded-full">
            Go Forward
          </button>
        </Link>
      )}
    </>
  );
};

export default CheckoutForm;
