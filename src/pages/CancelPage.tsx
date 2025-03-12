import React from "react";
import { useNavigate } from "react-router-dom";

const CancelPage: React.FC = () => {
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
      <h2>Payment Cancelled 😞</h2>
      <p>Your transaction was not completed.</p>
      <button
        onClick={() => navigate("/checkout")}
        style={{
          padding: "10px",
          backgroundColor: "red",
          color: "white",
          borderRadius: "5px",
          marginTop: "10px",
        }}
      >
        Try Again
      </button>
    </div>
  );
};

export default CancelPage;
