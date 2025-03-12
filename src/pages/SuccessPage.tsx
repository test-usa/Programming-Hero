import React from "react";
import { useNavigate } from "react-router-dom";

const SuccessPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "40px auto",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h2>Payment Successful! 🎉</h2>
      <p>Thank you for your purchase.</p>
      <button
        onClick={() => navigate("/")}
        style={{
          padding: "10px",
          backgroundColor: "blue",
          color: "white",
          borderRadius: "5px",
          marginTop: "10px",
        }}
      >
        Back to Home
      </button>
    </div>
  );
};

export default SuccessPage;
