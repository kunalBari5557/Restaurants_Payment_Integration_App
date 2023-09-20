import React from "react";

const successContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "rgb(76 147 175)", // Green background color
};

const successMessageStyle = {
  textAlign: "center",
  backgroundColor: "#FFFFFF", // White background color
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Light shadow
  maxWidth: "400px", // Limit the width of the message
};

const headingStyle = {
  color: "#4CAF50", // Green text color
  fontSize: "24px", // Larger font size
};

const paragraphStyle = {
  fontSize: "18px", // Slightly larger font size for paragraphs
  margin: "10px 0",
};

const Success = () => {
  return (
    <div style={successContainerStyle}>
      <div style={successMessageStyle}>
        <h2 style={headingStyle}>Payment Confirmed!</h2>
        <p style={paragraphStyle}>Thank you for your payment.</p>
        <p style={paragraphStyle}>Your order has been successfully processed.</p>
        <p style={paragraphStyle}>Enjoy your purchase!</p>
      </div>
    </div>
  );
};

export default Success;
