import React, { useState } from "react";

const CheckoutPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const coursePrice = 2000; // Example price in cents ($20.00)

  const handleCheckout = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/billing/createCheckoutSession",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            amount: coursePrice, // Sending price to backend
            currency: "usd",
          }),
        }
      );

      const { url } = await response.json();
      const res = await response.json()
      window.location.href = url; // Redirect to Stripe payment page
      console.log(res)
    } catch (error) {
      console.error("Error creating checkout session:", error);
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
      }}
    >
      <h2>Checkout</h2>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <h3>Total Price: ${(coursePrice / 100).toFixed(2)}</h3>

      <button
        onClick={handleCheckout}
        style={{
          marginTop: "10px",
          padding: "10px",
          backgroundColor: "green",
          color: "white",
          borderRadius: "5px",
          width: "100%",
        }}
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default CheckoutPage;
