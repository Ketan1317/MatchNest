import React from "react";


const UpperFooter = () => {
 
  return (
    <section
      style={{
        height: "40vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px",
      }}
    >
      <div style={{ maxWidth: "700px" }}>
        <h2
          style={{
            fontSize: "2.2rem",
            fontWeight: "bold",
            background: "linear-gradient(90deg, #f43f5e, #db2777)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            marginBottom: "15px",
          }}
        >
          Why waste time? 💕
        </h2>

        <p
          style={{
            fontSize: "1.1rem",
            color: "#444",
            fontWeight:"500",
            lineHeight: "1.6",
            marginBottom: "25px",
          }}
        >
          Our website is faster than your crush replying to texts (yep, that fast 🚀).
          <br />
          Just sign up, swipe, chat, and boom – love is in the air.  
          No complicated steps, no boring waiting. Just pure vibes ✨
        </p>

        <button
          style={{
            marginTop: "10px",
            padding: "12px 24px",
            background: "linear-gradient(to right, #f43f5e, #ec4899)",
            color: "white",
            borderRadius: "9999px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "transform 0.2s ease, box-shadow 0.3s ease",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
            border: "none",
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0px 6px 14px rgba(0,0,0,0.2)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0px 4px 10px rgba(0,0,0,0.15)";
          }}
        >
          Get Started Now 🚀
        </button>
      </div>
    </section>
  );
};

export default UpperFooter;
