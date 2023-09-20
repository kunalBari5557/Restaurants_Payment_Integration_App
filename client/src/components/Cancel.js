import React from "react";

const cancelContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "rgb(76 147 175)", 
};

const cancelMessageStyle = {
  textAlign: "center",
  backgroundColor: "#FFFFFF", 
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", 
  maxWidth: "400px", 
};

const headingStyle = {
  color: "#ff0707", 
  fontSize: "24px", 
};

const paragraphStyle = {
  fontSize: "18px", 
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
