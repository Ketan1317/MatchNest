import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import img1 from "../assets/hey.jpg";
import img2 from "../assets/hey1.jpg";
import img3 from "../assets/hey4.jpg";
import img4 from "../assets/hey3.jpg";
import img5 from "../assets/hey2.jpg";

const people = [
  {
    name: "Sophia",
    age: 24,
    location: "Mumbai",
    bio: "Coffee lover ☕ | Traveller ✈️ | Looking for meaningful connections ❤️",
    interests: ["Photography 📸", "Yoga 🧘‍♀️", "Books 📚"],
    img: img1,
  },
  {
    name: "Aarav",
    age: 27,
    location: "Delhi",
    bio: "Tech enthusiast 💻 | Music 🎶 | Swipe right if you love dogs 🐶",
    interests: ["Coding 👨‍💻", "Guitar 🎸", "Dogs 🐶"],
    img: img2,
  },
  {
    name: "Ananya",
    age: 25,
    location: "Bangalore",
    bio: "Foodie 🍜 | Loves movies 🎬 | Dreamer 🌸",
    interests: ["Cooking 🍳", "Movies 🎥", "Travelling 🌍"],
    img: img3,
  },
  {
    name: "Rohan",
    age: 26,
    location: "Pune",
    bio: "Adventurer 🏔️ | Fitness freak 🏋️‍♂️ | Always up for a challenge!",
    interests: ["Hiking 🚶‍♂️", "Sports ⚽", "Adventure 🗺️"],
    img: img4,
  },
  {
    name: "Meera",
    age: 23,
    location: "Chennai",
    bio: "Artist 🎨 | Musician 🎶 | Believes in positivity 🌟",
    interests: ["Painting 🖌️", "Music 🎧", "Dancing 💃"],
    img: img5,
  },
];

const Match = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (direction) => {
    if (direction === "right") {
      alert(`💘 You liked ${people[currentIndex].name}`);
    } else {
      alert(`❌ You skipped ${people[currentIndex].name}`);
    }
    setCurrentIndex((prev) => (prev + 1) % people.length);
  };

  const person = people[currentIndex];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #fff5f7, #ffffff)",
      }}
    >
      <Header />

      <section
        style={{
          background: "linear-gradient(90deg, #ec4899, #f43f5e)",
          color: "#fff",
          textAlign: "center",
          padding: "100px 20px",
          marginBottom: "40px",
          marginTop: "70px",
          minHeight: "40vh",
          borderBottomLeftRadius: "50px",
          borderBottomRightRadius: "50px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "800",
            marginBottom: "15px",
            fontFamily: "Michroma, sans-serif",
            textShadow: "0 2px 4px rgba(0,0,0,0.2)",
          }}
        >
          Find Your Match Today! 💕
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.6",
            fontWeight: "500",
            textShadow: "0 1px 3px rgba(0,0,0,0.15)",
          }}
        >
          Swipe through profiles and connect with people who share your vibes.
          Start your journey to love or friendship with MatchNest!
        </p>
      </section>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "400px",
            maxWidth: "90%",
            height: "80vh",
            background: "linear-gradient(135deg, #ffffff, #fdf2f8)",
            borderRadius: "20px",
            boxShadow:
              "0 10px 30px rgba(0,0,0,0.15), inset 0 2px 6px rgba(255,255,255,0.8)",
            display: "flex",
            flexDirection: "column",
            transition: "transform 0.3s ease",
            border: "1px solid #ffe4ec",
            overflow: "hidden",
            paddingBottom:"10px"
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.transform = "translateY(-5px)")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.transform = "translateY(0)")
          }
        >
          <img
            src={person.img}
            alt={person.name}
            style={{
              width: "100%",
              height: "45%",
              objectFit: "cover",
              borderBottom: "2px solid #ffe4ec",
            }}
          />

          <div
            style={{
              padding: "20px",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "1.8rem",
                  fontWeight: "700",
                  color: "#a35645",
                  marginBottom: "8px",
                  textTransform: "capitalize",
                }}
              >
                {person.name}, {person.age}
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#666",
                  marginBottom: "12px",
                  fontStyle: "italic",
                }}
              >
                📍 {person.location}
              </p>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "#444",
                  lineHeight: "1.5",
                  fontWeight: "500",
                }}
              >
                {person.bio}
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              padding: "30px  16px",
            }}
          >
            <button
              onClick={() => handleSwipe("left")}
              style={{
                width: "55px",
                height: "55px",
                borderRadius: "50%",
                border: "none",
                background: "#f0e6e4",
                fontSize: "1.6rem",
                cursor: "pointer",
                transition: "transform 0.3s ease",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              }}
              onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
              onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            >
              ❌
            </button>
            <button
              onClick={() => handleSwipe("right")}
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                border: "none",
                background: "linear-gradient(to right, #f43f5e, #ec4899)",
                fontSize: "1.8rem",
                cursor: "pointer",
                color: "#fff",
                fontWeight: "bold",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                transition: "transform 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
              onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            >
              💖
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Match;
