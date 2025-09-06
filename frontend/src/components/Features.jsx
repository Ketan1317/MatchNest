import React from "react";
import Couple from "../assets/img1.jpg";
import VideoCall from "../assets/img2.jpg";
import ChatImg from "../assets/img4.jpg";
import VoiceCall from "../assets/img3.jpg";
import SwipeImg from "../assets/img6.jpg";
import ParentControl from "../assets/img5.jpg";
import leftHand from "../assets/left.png";
import rightHand from "../assets/right.png";

const Features = () => {
  const features = [
    
    {
      title: "Video Calling",
      desc: "Build genuine connections through secure, high-quality video calls with your matches before taking the next step.",
      img: VideoCall,
    },
    {
      title: "Instant Chat",
      desc: "Engage instantly with matches using our seamless messaging system, complete with emojis and interactive reactions.",
      img: ChatImg,
    },
    
    {
      title: "Swipe Feature",
      desc: "Discover new people effortlessly with our intuitive swipe feature — swipe right to like, left to pass.",
      img: SwipeImg,
    },
    {
      title: "Parental Control",
      desc: "For marriage-focused users, our parental control feature allows parents to guide profiles safely and securely.",
      img: ParentControl,
    },
  ];

  return (
    <section style={{ padding: "20px", background: "#ffffff", position: "relative", overflow: "hidden" }}>
      {/* Header Section */}
      <div
        style={{
          height: "80vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          marginBottom: "40px",
        }}
      >
        {/* Left Hand */}
        <img
          src={leftHand}
          alt="Left Hand"
          style={{
            position: "absolute",
            left: "0",
            top: "50%",
            transform: "translateY(-50%)",
            height: "450px",
            animation: "slideInLeft 1.2s ease-out forwards",
          }}
        />

        <div
          style={{
            textAlign: "center",
            zIndex: 2,
            maxWidth: "850px",
            padding: "0 30px",
          }}
        >
          <h1
            style={{
              fontSize: "60px",
              fontFamily: "Michroma, sans-serif",
              fontWeight: "900",
              marginBottom: "25px",
              background: "linear-gradient(90deg, #f43f5e, #db2777)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "fadeIn 1.5s ease-out",
            }}
          >
            Discover Our Features
          </h1>
          <p
            style={{
              fontSize: "22px",
              fontWeight: "500",
              color: "#374151",
              lineHeight: "1.8",
            }}
          >
            Explore how <strong>MatchNest</strong> helps you connect, chat, and
            discover your ideal partner with innovative tools designed for
            trust, meaningful relationships, and a seamless experience. From
            smart matchmaking to secure interactions, everything is built to
            bring people closer with confidence.
          </p>
        </div>

        {/* Right Hand */}
        <img
          src={rightHand}
          alt="Right Hand"
          style={{
            position: "absolute",
            right: "0",
            top: "50%",
            transform: "translateY(-50%)",
            height: "450px",
            animation: "slideInRight 1.2s ease-out forwards",
          }}
        />
      </div>

      {/* Features Stacks with Parallax */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 20px",
          position: "relative",
          minHeight: "80vh",
        }}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            style={{
              height: "80vh",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              background: index % 2 === 0 ? "#f9fafb" : "#ffffff",
              borderRadius: "15px",
              marginBottom: "40px",
              padding: "40px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              overflow: "hidden",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {/* Parallax Background */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: `url(${feature.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                zIndex: 0,
                transform: "translateZ(0)",
              }}
            />
            <div
              style={{
                position: "relative",
                zIndex: 1,
                textAlign: "center",
                width: "100%",
                padding: "20px",
                background: "rgba(255, 255, 255, 0.8)",
                borderRadius: "10px",
              }}
            >
              <h2
                style={{
                  fontSize: "42px",
                  fontWeight: "900",
                  marginBottom: "24px",
                  lineHeight: "1.2",
                  background:
                    "linear-gradient(90deg, #ec4899, #8b5cf6, #3b82f6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundSize: "200% auto",
                  animation: "shine 6s linear infinite",
                  cursor: "default",
                }}
              >
                {feature.title}
              </h2>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  lineHeight: "1.8",
                  color: "#4b5563",
                  maxWidth: "640px",
                  margin: "0 auto",
                  transition: "all 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.02)";
                  e.currentTarget.style.color = "#111827";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.color = "#4b5563";
                }}
              >
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes fadeIn { 
          0% { opacity: 0; transform: translateY(20px); } 
          100% { opacity: 1; transform: translateY(0); } 
        }
        @keyframes slideInLeft {
          0% { transform: translateX(-100px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInRight {
          0% { transform: translateX(100px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes shine {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        @media (max-width: 768px) {
          h1 {
            font-size: 32px !important;
            white-space: normal !important;
          }
          div[style*="height: 80vh"] {
            height: auto !important;
            padding: 20px !important;
          }
          p[style*="font-size: 20px"] {
            font-size: 16px !important;
          }
          div[style*="backgroundAttachment: fixed"] {
            backgroundAttachment: scroll !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Features;