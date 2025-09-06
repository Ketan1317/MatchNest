import React from "react";
import Header from "../components/Header";
import { FaVideo, FaPhone } from "react-icons/fa";
import bg from "../assets/okkk.jpg";
import img1 from "../assets/hey.jpg";
import img2 from "../assets/hey1.jpg";
import img3 from "../assets/hey4.jpg";
import img4 from "../assets/hey3.jpg";

const Chat = () => {
  const friends = [
    { name: "Alice", msg: "See you tomorrow", time: "10:24 AM", img: img1 },
    { name: "Bob", msg: "How’s the plan going?", time: "09:15 AM", img: img2 },
    { name: "Charlie", msg: "Call me when free", time: "Yesterday", img: img3 },
    { name: "Sophia", msg: "Sent a photo 📷", time: "Yesterday", img: img4 },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />

      <div
        style={{
          flex: 1,
          display: "flex",
          marginTop: "72px",
        }}
      >
        {/* Left Sidebar - Friends List */}
        <div
          style={{
            width: "360px",
            background: "#fff",
            borderRight: "1px solid #eee",
            display: "flex",
            flexDirection: "column",
            padding: "16px",
            boxShadow: "2px 0 8px rgba(0,0,0,0.08)",
          }}
        >
          <h3
            style={{
              margin: "10px 0 20px",
              color: "#a35645",
              fontWeight: "700",
              fontSize: "1.2rem",
            }}
          >
            Chats
          </h3>

          {friends.map((friend, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px",
                borderRadius: "12px",
                cursor: "pointer",
                transition: "0.3s",
                marginBottom: "10px",
                background:
                  index === 0
                    ? "linear-gradient(to right, #f43f5e, #ec4899)"
                    : "transparent",
                color: index === 0 ? "#fff" : "#333",
                boxShadow:
                  index === 0
                    ? "0 4px 12px rgba(0,0,0,0.15)"
                    : "0 2px 6px rgba(0,0,0,0.05)",
              }}
            >
              <img
                src={friend.img}
                alt={friend.name}
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: index === 0 ? "2px solid #fff" : "2px solid #eee",
                }}
              />
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontWeight: "600",
                    fontSize: "0.95rem",
                    marginBottom: "3px",
                  }}
                >
                  {friend.name}
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: index === 0 ? "#fdfdfd" : "#666",
                  }}
                >
                  {friend.msg}
                </div>
              </div>
              <div
                style={{
                  fontSize: "0.7rem",
                  color: index === 0 ? "#fdfdfd" : "#999",
                }}
              >
                {friend.time}
              </div>
            </div>
          ))}
        </div>

        {/* Right Chat Section */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Chat Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "rgba(255,255,255,0.9)",
              padding: "14px 20px",
              borderBottom: "1px solid #eee",
              boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <img
                src={img1}
                alt="Alice"
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid #ec4899",
                }}
              />
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  color: "#a35645",
                }}
              >
                Alice
              </h3>
            </div>
            <div style={{ display: "flex", gap: "12px" }}>
              <button
                style={{
                  background: "linear-gradient(to right, #f43f5e, #ec4899)",
                  border: "none",
                  padding: "8px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  fontSize: "1rem",
                  color: "#fff",
                }}
              >
                <FaPhone />
              </button>
              <button
                style={{
                  background: "linear-gradient(to right, #f43f5e, #ec4899)",
                  border: "none",
                  padding: "8px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  fontSize: "1rem",
                  color: "#fff",
                }}
              >
                <FaVideo />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              padding: "20px",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <div
              style={{
                alignSelf: "flex-start",
                background: "rgba(255,255,255,0.85)",
                color: "#333",
                maxWidth: "60%",
                padding: "10px 14px",
                borderRadius: "12px",
              }}
            >
              Hey, how are you?
            </div>
            <div
              style={{
                alignSelf: "flex-end",
                background: "linear-gradient(to right, #f43f5e, #ec4899)",
                color: "#fff",
                maxWidth: "60%",
                padding: "10px 14px",
                borderRadius: "12px",
              }}
            >
              I’m good! How about you?
            </div>
            <div
              style={{
                alignSelf: "flex-start",
                background: "rgba(255,255,255,0.85)",
                color: "#333",
                maxWidth: "60%",
                padding: "10px 14px",
                borderRadius: "12px",
              }}
            >
              Excited for our wedding plan 😍
            </div>
            <div
              style={{
                alignSelf: "flex-end",
                background: "linear-gradient(to right, #f43f5e, #ec4899)",
                color: "#fff",
                maxWidth: "60%",
                padding: "10px 14px",
                borderRadius: "12px",
              }}
            >
              Me too
            </div>
          </div>

          {/* Input */}
          <div
            style={{
              display: "flex",
              padding: "12px",
              background: "rgba(255,255,255,0.9)",
              borderTop: "1px solid #eee",
            }}
          >
            <input
              type="text"
              placeholder="Type a message..."
              style={{
                flex: 1,
                padding: "10px 12px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                outline: "none",
                fontSize: "0.95rem",
              }}
            />
            <button
              style={{
                marginLeft: "10px",
                background: "linear-gradient(to right, #f43f5e, #ec4899)",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                padding: "10px 18px",
                cursor: "pointer",
                fontWeight: "600",
                boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
              }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
