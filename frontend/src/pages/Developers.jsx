import React from "react";
import img1 from "../assets/hoho.jpg";
import img2 from "../assets/khushu.jpg";
import img3 from "../assets/img6.jpg";
import img4 from "../assets/img5.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Developers = () => {
  const team = [
    {
      name: "Ketan Goyal",
      role: "Frontend Engineer 🎨",
      about:
        "Passionate about crafting elegant UI and smooth user experiences. Turns ideas into beautiful, functional designs.",
      img: img1,
    },
    {
      name: "Khushboo",
      role: "Backend Engineer ⚙️",
      about:
        "Ensures scalability and reliability by building strong APIs and managing databases with precision.",
      img: img2,
    },
    {
      name: "Komalpreet",
      role: "UI/UX Designer 👑",
      about:
        "Designs intuitive and visually appealing interfaces that balance creativity with usability.",
      img: img3,
    },
    {
      name: "Khushi Johar",
      role: "DevOps Specialist 🥷",
      about:
        "Streamlines deployments and infrastructure management to ensure seamless product delivery.",
      img: img4,
    },
  ];

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(90deg, #ec4899, #f43f5e)",
          color: "#fff",
          marginTop: "69px",
          textAlign: "center",
          padding: "90px 20px",
          height: "47vh",
          borderBottomLeftRadius: "50px",
          borderBottomRightRadius: "50px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        }}
      >
        <h2
          style={{
            fontSize: "2.9rem",
            fontWeight: "bold",
            marginBottom: "15px",
            fontFamily: "Michroma",
          }}
        >
          Meet Our Developers 💻
        </h2>
        <p
          style={{
            fontSize: "20px",
            maxWidth: "750px",
            margin: "0 auto",
            lineHeight: "1.7",
            fontWeight: "500",
            opacity: 0.95,
          }}
        >
          The people behind MatchNest – dedicated to building a platform that
          connects meaningful relationships with technology and creativity.
        </p>
      </section>

      {/* Team Section */}
      <section
        style={{
          background: "#fff",
          padding: "70px 20px",
          marginTop: "40px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)", // 2 columns layout
            gap: "50px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {team.map((dev, index) => (
            <div
              key={index}
              style={{
                borderRadius: "12px",
                background:
                  "linear-gradient(to right, #ec4899, #8b5cf6)", // gradient border
                padding: "3px", 
              }}
            >
              <div
                style={{
                  borderRadius: "18px",
                  background: "#fff",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
                  padding: "25px",
                  textAlign: "center",
                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                  cursor: "pointer",
                  height: "100%",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(236,72,153,0.25)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 30px rgba(0,0,0,0.1)";
                }}
              >
                {/* Developer Image */}
                <img
                  src={dev.img}
                  alt={dev.name}
                  style={{
                    width: "100%",
                    height: "350px",
                    borderRadius: "14px",
                    objectFit: "cover",
                    marginBottom: "20px",
                  }}
                />

                {/* Developer Info */}
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "#111827",
                  }}
                >
                  {dev.name}
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: "600",
                    background: "linear-gradient(to right, #ec4899, #8b5cf6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    margin: "6px 0 12px 0",
                  }}
                >
                  {dev.role}
                </p>
                <p
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                    color: "#4b5563",
                  }}
                >
                  {dev.about}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Developers;
