"use client";
import { useState } from "react";

const CheckoutPage = () => {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/billing/createCheckoutSession", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      console.log(data)
      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe Checkout
      } else {
        console.error("Checkout URL not found");
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <button
        onClick={handleCheckout}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg"
        disabled={loading}
      >
        {loading ? "Redirecting..." : "Proceed to Payment"}
      </button>
    </div>
  );
};

export default CheckoutPage;
