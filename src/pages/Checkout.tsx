import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_51NiF1SKVFWA3nojbTVAqv3yij9CoqTw7Zes5HyJQll4LJv964bTbqtLj5pIUVzASgqeShrASY7A33hJWu9WYP7NP000gXVepGK");

export default function PaymentPage() {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    );
}

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();
      if (!stripe || !elements) return;

      setLoading(true);
      const res = await fetch("http://localhost:5000/billing/createPaymentIntent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: 5000, currency: "usd" }) // Example amount: $50
      });
      const { clientSecret } = await res.json();

      const result = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
              card: elements.getElement(CardElement)!,
          },
      });

      if (result.error) {
          alert(result.error.message);
      } else if (result.paymentIntent?.status === "succeeded") {
          alert("Payment successful!");
      }
      setLoading(false);
  };

  return (
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded shadow">
          <h2 className="text-lg font-bold mb-4">Pay with Card</h2>
          <CardElement className="border p-2 rounded" />
          <button type="submit" disabled={!stripe || loading} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
              {loading ? "Processing..." : "Pay Now"}
          </button>
      </form>
  );
}