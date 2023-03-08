import React from "react";

function Hero() {
  let welcomeMessage = "Hero Image.";
  return (
    <div className="hero">
      <h1
        style={{
          color: "lightblack",
          backgroundColor: "transparent",
          fontSize: "30px",
          padding: "8px",
          borderRadius: "5px"
        }}
      >
        {welcomeMessage}
      </h1>
    </div>
  );
}

export default Hero;
