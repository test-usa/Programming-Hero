// import React, { useState } from "react";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// const StripePayment = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const handlePayment = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!stripe || !elements) return;

//     setLoading(true);
    
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card: elements.getElement(CardElement)!,
//     });

//     if (error) {
//       setMessage(error.message || "Payment failed");
//       setLoading(false);
//       return;
//     }

//     // Send paymentMethod.id to the backend
//     const res = await fetch("http://localhost:3000/billing/createCheckoutSession", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ paymentMethodId: paymentMethod.id, amount: 5000, currency: "USD", }), // Amount in cents (e.g., $50.00)
//     });

//     const data = await res.json();
//     console.log(data)
//     setLoading(false);
//     if (data.url) {
//         window.location.href = data.url
//       }

//     if (data.success) {
//       setMessage("Payment successful!");
//     } else {
//       setMessage(data.message || "Payment failed");
//     }
//   };

//   return (
//     <div className="">
//     <form onSubmit={handlePayment} className="p-4 border rounded shadow-md max-w-2xl mx-auto bg-white">
//       <CardElement className="p-2 border rounded" />
//       <button
//         type="submit"
//         disabled={!stripe || loading}
//         className="mt-4 px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
//       >
//         {loading ? "Processing..." : "Pay"}
//       </button>
//       {message && <p className="mt-2 text-red-500">{message}</p>}
//     </form>
//     </div>
//   );
// };

// export default StripePayment;


















import React, { useState } from "react";
import {
  useStripe,
  useElements,
  CardElement,
  PaymentRequestButtonElement,
} from "@stripe/react-stripe-js";

const PaymentForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setMessage("");

    try {
      // Step 1: Request payment intent from backend
      const response = await fetch(
        "http://localhost:3000/billing/createPaymentIntent",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: 2000, currency: "usd" }), // Example $20 payment
        }
      );

      const { clientSecret } = await response.json();

      console.log(clientSecret)

      // Step 2: Confirm Payment with Stripe
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)!,
        },
      });

      console.log(result)

      if (result.error) {
        setMessage(result.error.message || "Payment failed");
      } else {
        setMessage("Payment successful!");
      }
    } catch (error) {
      setMessage("Error processing payment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "400px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
      }}
    >
      <h2>Enter Card Details</h2>
      <CardElement />
      <button
        type="submit"
        disabled={loading}
        style={{
          marginTop: "10px",
          padding: "10px",
          backgroundColor: "blue",
          color: "white",
          borderRadius: "5px",
        }}
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
      {message && (
        <p style={{ color: message.includes("successful") ? "green" : "red" }}>
          {message}
        </p>
      )}
    </form>
  );
};

export default PaymentForm;
