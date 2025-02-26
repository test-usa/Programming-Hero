import React from "react";

const CheckoutButton: React.FC = () => {
  const handleCheckout = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/billing/createCheckoutSession",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: 2000, currency: "usd" }), // Example $20
        }
      );
      // console.log(response.json());
      const { url } = await response.json();
      window.location.href = url; // Redirect to Stripe Checkout
    } catch (error) {
      console.error("Error creating checkout session:", error);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      style={{
        marginTop: "10px",
        padding: "10px",
        backgroundColor: "green",
        color: "white",
        borderRadius: "5px",
      }}
    >
      Pay with Stripe Checkout
    </button>
  );
};

export default CheckoutButton;
