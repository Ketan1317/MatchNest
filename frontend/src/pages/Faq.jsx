import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaAngleUp } from "react-icons/fa6";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is MatchNest?",
      answer:
        "MatchNest is a dating platform designed to foster meaningful connections, from casual friendships to lifelong partnerships. We prioritize safety, authenticity, and inclusivity to help you find your perfect match.",
    },
    {
      question: "How do I create an account?",
      answer:
        'Simply click the "Get Started" button on our homepage or the signup link, fill in your details, and follow the prompts to set up your profile. It’s quick, easy, and free to join!',
    },
    {
      question: "Is MatchNest safe to use?",
      answer:
        "Absolutely! We use advanced security measures to protect your data and ensure a safe environment. Our moderation team also reviews profiles to maintain authenticity and respectfulness.",
    },
    {
      question: "Can I use MatchNest for free?",
      answer:
        "Yes, MatchNest offers a free plan with access to core features. We also offer premium subscriptions for enhanced features, which you can explore in your account settings.",
    },
    {
      question: "How does MatchNest match users?",
      answer:
        "Our platform uses a combination of user preferences, interests, and advanced algorithms to suggest compatible matches, ensuring you connect with people who share your values and goals.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      style={{
        backgroundColor: "#f7f7f7",
        minHeight: "100vh",
        marginTop: "69px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Header />

      <section
        style={{
          position: "relative",
          background: "linear-gradient(90deg, #ec4899, #f43f5e)",
          color: "#ffffff",

          textAlign: "center",
          padding: "150px 20px",
        }}
      >
        <div style={{ position: "relative", zIndex: 10 }}>
          <h1
            style={{
              fontSize: "2.9rem",
              fontFamily: "Michroma, sans-serif",
              fontWeight: "800",
              marginBottom: "1.5rem",
            }}
          >
            Frequently Asked Questions
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              maxWidth: "800px",
              margin: "0 auto",
              lineHeight: "1.8",
            }}
          >
            Got questions about MatchNest? We’ve got answers! Explore our FAQs
            to learn more about how we help you find meaningful connections.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        style={{
          padding: "80px 20px",
          maxWidth: "900px",
          margin: "0 auto",
          fontFamily: "sans-serif",
        }}
      >
        

        <div
          style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: "14px",
                boxShadow:
                  openIndex === index
                    ? "0 6px 18px rgba(236,72,153,0.25)"
                    : "0 4px 10px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease-in-out",
                overflow: "hidden",
              }}
            >
              <button
                onClick={() => toggleFaq(index)}
                style={{
                  width: "100%",
                  padding: "18px 22px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "#1f2937",
                    textAlign: "left",
                  }}
                >
                  {faq.question}
                </h3>
                <FaAngleUp
                  style={{
                    color: "#ec4899",
                    fontSize: "1.5rem",
                    transition: "transform 0.3s ease",
                    transform:
                      openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>

              <div
                style={{
                  maxHeight: openIndex === index ? "500px" : "0",
                  opacity: openIndex === index ? "1" : "0",
                  transition:
                    "max-height 0.4s ease, opacity 0.4s ease, padding 0.3s ease",
                  padding: openIndex === index ? "0 22px 18px" : "0 22px 0",
                }}
              >
                <p
                  style={{
                    color: "#4b5563",
                    lineHeight: "1.7",
                    fontSize: "16px",
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "700",
            background: "linear-gradient(90deg, #ec4899, #f43f5e)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "1.5rem",
          }}
        >
          Still Have Questions?
        </h2>
        <p
          style={{
            fontSize: "1.125rem",
            color: "#4b5563",
            maxWidth: "600px",
            margin: "0 auto",
            marginBottom: "2rem",
          }}
        >
          Reach out to our support team or join MatchNest today to start your
          journey to meaningful connections!
        </p>
        <a
          href="/signup"
          style={{
            display: "inline-block",
            background: "linear-gradient(to right, #f43f5e, #db2777)",
            color: "#ffffff",
            fontWeight: "600",
            padding: "0.75rem 2rem",
            borderRadius: "9999px",
            textDecoration: "none",
            transition:
              "background 0.3s ease-in-out, transform 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.background =
              "linear-gradient(to right, #e11d48, #be185d)";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background =
              "linear-gradient(to right, #f43f5e, #db2777)";
            e.target.style.transform = "scale(1)";
          }}
        >
          Get Started
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default Faq;
