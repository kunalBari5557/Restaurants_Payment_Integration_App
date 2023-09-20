import React from "react";

const cancelContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "rgb(76 147 175)", // Blue background color
};

const cancelMessageStyle = {
  textAlign: "center",
  backgroundColor: "#FFFFFF", // White background color
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Light shadow
  maxWidth: "400px", // Limit the width of the message
};

const headingStyle = {
  color: "#ff0707", // Red text color for failure
  fontSize: "24px", // Larger font size
};

const paragraphStyle = {
  fontSize: "18px", // Slightly larger font size for paragraphs
  margin: "10px 0",
};

const Cancel = () => {
  return (
    <div style={cancelContainerStyle}>
      <div style={cancelMessageStyle}>
        <h2 style={headingStyle}>Payment Failed!</h2>
        <p style={paragraphStyle}>Please try your payment again.</p>
        <p style={paragraphStyle}>If the issue persists, contact our support.</p>
      </div>
    </div>
  );
};

export default Cancel;
