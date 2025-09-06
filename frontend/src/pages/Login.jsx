import React from "react";

const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(to bottom right, #ec4899, #e11d48, #f87171)",
          animation: "slide-in-left 0.8s ease-out forwards",
        }}
      >
        <h1
          className='font-["Rock_Salt",cursive]'
          style={{
            color: "#fff",
            fontSize: "68px",
            fontWeight: "bold",
            textShadow: "0 2px 6px rgba(0,0,0,0.4)",
          }}
        >
          MatchNest
        </h1>
      </div>

      <div
        style={{
          width: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(to bottom, #fdf2f8, #ffffff)",
          animation: "slide-in-right 0.8s ease-out forwards",
          padding: "20px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "420px",
            background: "linear-gradient(to bottom right, #ffffff, #fff5f7)",
            boxShadow: "0 8px 20px rgba(236,72,153,0.25)",
            borderRadius: "20px",
            padding: "32px",
            transition: "transform 0.3s, box-shadow 0.3s",
          }}
        >
          <h2
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              marginBottom: "25px",
              textAlign: "center",
              color: "transparent",
              background: "linear-gradient(to right, #e11d48, #ec4899)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              letterSpacing: "1px",
            }}
          >
            Welcome Back
          </h2>

          <form style={{ marginBottom: "20px" }}>
            {/* Email */}
            <div style={{ marginBottom: "18px" }}>
              <label
                style={{
                  display: "block",
                  color: "#444",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  width: "100%",
                  marginTop: "8px",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "24px",
                  outline: "none",
                  color: "#333",
                  fontSize: "14px",
                  transition: "all 0.2s",
                }}
                onFocus={(e) => (e.target.style.border = "1px solid #ec4899")}
                onBlur={(e) => (e.target.style.border = "1px solid #ddd")}
                required
              />
            </div>

            {/* Password */}
            <div style={{ marginBottom: "18px" }}>
              <label
                style={{
                  display: "block",
                  color: "#444",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                style={{
                  width: "100%",
                  marginTop: "8px",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "24px",
                  outline: "none",
                  color: "#333",
                  fontSize: "14px",
                  transition: "all 0.2s",
                }}
                onFocus={(e) => (e.target.style.border = "1px solid #ec4899")}
                onBlur={(e) => (e.target.style.border = "1px solid #ddd")}
                required
              />
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                background: "linear-gradient(to right, #e11d48, #ec4899)",
                color: "#fff",
                borderRadius: "24px",
                fontWeight: "bold",
                fontSize: "16px",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "scale(1.03)";
                e.target.style.boxShadow = "0 6px 14px rgba(236,72,153,0.5)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "none";
              }}
            >
              Log In
            </button>
          </form>

          <p
            style={{
              marginTop: "20px",
              textAlign: "center",
              fontSize: "14px",
              color: "#555",
            }}
          >
            New to MatchNest?{" "}
            <a
              href="/signup"
              style={{
                color: "#e11d48",
                fontWeight: "600",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseOver={(e) => (e.target.style.color = "#be123c")}
              onMouseOut={(e) => (e.target.style.color = "#e11d48")}
            >
              Create Account
            </a>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes slide-in-left {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slide-in-right {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Login;
