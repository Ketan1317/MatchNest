import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div style={{ background: "#fff" }}>
      <Header />

      <section
        style={{
          background: "linear-gradient(90deg, #ec4899, #f43f5e)",
          color: "#fff",
          marginTop: "69px",
          height:"48vh",
          textAlign: "center",
          padding: "90px 20px",
          borderBottomLeftRadius: "50px",
          borderBottomRightRadius: "50px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        }}
      >
        <h1
          style={{
            fontSize: "52px",
            fontWeight: "900",
            marginBottom: "20px",
            textShadow: "0 4px 8px rgba(0,0,0,0.3)",
            fontFamily: "Michroma, sans-serif",
          }}
        >
          About{" "}
          <span className="font-['Rock_Salt',cursive]">
            MatchNest
          </span>
        </h1>
        <p
          style={{
            fontSize: "20px",
            maxWidth: "850px",
            margin: "0 auto",
            lineHeight: "1.8",
            fontWeight: "600",
            textShadow: "0 2px 6px rgba(0,0,0,0.25)",
          }}
        >
          At MatchNest, we believe in turning swipes into lifelong stories.  
          From fun chats to wedding bells 💍, our platform bridges the gap  
          between dating and meaningful relationships.
        </p>
      </section>

      {/* Our Mission */}
      <section
        style={{
          padding: "100px 20px",
          textAlign: "center",
          background: "linear-gradient(180deg, #fff, #fff5f7)",
        }}
      >
        <h2
          style={{
            fontSize: "38px",
            fontWeight: "800",
            marginBottom: "30px",
            background: "linear-gradient(90deg, #ec4899, #f43f5e)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "Michroma, sans-serif",
          }}
        >
          Our Mission
        </h2>
        <p
          style={{
            fontSize: "18px",
            color: "#444",
            maxWidth: "900px",
            margin: "0 auto",
            lineHeight: "1.8",
          }}
        >
          MatchNest is more than just a dating app — it’s a journey towards
          meaningful connections. We empower individuals and families to find
          love in a safe, respectful, and genuine way. Whether you’re looking
          for casual companionship 💞 or a soulmate, MatchNest is here to guide
          you every step of the way.
        </p>
      </section>

      {/* Our Vision */}
      <section
        style={{
          padding: "100px 20px",
          textAlign: "center",
          background: "#fff",
        }}
      >
        <h2
          style={{
            fontSize: "38px",
            fontWeight: "800",
            marginBottom: "30px",
            background: "linear-gradient(90deg, #ec4899, #f43f5e)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "Michroma, sans-serif",
          }}
        >
          Our Vision
        </h2>
        <p
          style={{
            fontSize: "18px",
            color: "#444",
            maxWidth: "900px",
            margin: "0 auto",
            lineHeight: "1.8",
          }}
        >
          Our vision is to become the most trusted global platform for building
          meaningful relationships — from friendships to marriages. We want to
          redefine modern matchmaking by blending technology with authenticity,
          giving people the chance to find partners who truly align with their
          values, culture, and dreams.
        </p>
      </section>

      {/* Our Values */}
      <section
        style={{
          padding: "100px 20px",
          textAlign: "center",
          background: "linear-gradient(180deg, #fff5f7, #fff)",
        }}
      >
        <h2
          style={{
            fontSize: "38px",
            fontWeight: "800",
            marginBottom: "30px",
            background: "linear-gradient(90deg, #ec4899, #f43f5e)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "Michroma, sans-serif",
          }}
        >
          Our Values
        </h2>
        <p
          style={{
            fontSize: "18px",
            color: "#444",
            maxWidth: "900px",
            margin: "0 auto",
            lineHeight: "1.8",
          }}
        >
          At MatchNest, safety, authenticity, and inclusivity are at the heart of
          everything we do. We ensure every connection is respectful and
          genuine. Our goal is to create a space where people can freely express
          themselves, discover meaningful bonds, and celebrate love without
          barriers.
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default About;
