import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import avatar1 from "../assets/img1.jpg";
import avatar2 from "../assets/img2.jpg";
import avatar3 from "../assets/img3.jpg";
import avatar4 from "../assets/img4.jpg";
import avatar5 from "../assets/img5.jpg";
import avatar6 from "../assets/img6.jpg";

const testimonials = [
  {
    img: avatar1,
    name: "Aarav Sharma",
    text: "This platform completely changed how I connect with like-minded people. A truly amazing experience!",
  },
  {
    img: avatar2,
    name: "Ishita Mehra",
    text: "Elegant design, smooth experience, and great community features. Highly recommend it!",
  },
  {
    img: avatar3,
    name: "Rohan Verma",
    text: "A stunning platform with features that really make it stand out. Love every bit of it.",
  },
  {
    img: avatar4,
    name: "Priya Kapoor",
    text: "Seamless navigation and beautiful UI. It feels premium and easy to use.",
  },
  {
    img: avatar5,
    name: "Kunal Singh",
    text: "Absolutely love how simple and modern the design feels. A top-notch experience!",
  },
  {
    img: avatar6,
    name: "Simran Kaur",
    text: "Great platform to meet amazing people. The interface is super clean and interactive.",
  },
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () =>
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  const nextSlide = () =>
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <div style={{ width: "100%", position: "relative", overflow: "hidden" }}>
      {/* ✅ Heading is separate */}
      <h2
        style={{
          textAlign: "center",
          fontSize: "46px",
          fontWeight: "bold",
          margin: "20px 0",
          color: "#333",
          position: "relative",
          zIndex: 10,
        }}
      >
        What People Say
      </h2>

      {/* ✅ Slider */}
      <div
        style={{
          display: "flex",
          transition: "transform 0.7s ease-in-out",
          transform: `translateX(-${index * 100}%)`,
          width: "100%",
        }}
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            style={{
              flexShrink: 0,
              width: "100%",
              height: "100vh", // full screen height
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* ✅ Fullscreen Background Image */}
            <img
              src={t.img}
              alt={t.name}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(0,0,0,0.5)",
              }}
            />

            {/* ✅ Centered Content */}
            <div
              style={{
                position: "relative",
                textAlign: "center",
                maxWidth: "700px",
                padding: "20px",
                color: "#fff",
              }}
            >
              <p style={{ fontSize: "26px", fontWeight: "600", marginBottom: "20px" }}>
                “{t.text}”
              </p>
              <h3 style={{ fontSize: "22px", fontWeight: "bold" }}>— {t.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Navigation Arrows */}
      <button
        onClick={prevSlide}
        style={{
          position: "absolute",
          top: "50%",
          left: "20px",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          border: "none",
          padding: "12px",
          borderRadius: "50%",
          color: "#fff",
          cursor: "pointer",
          zIndex: 20,
        }}
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        style={{
          position: "absolute",
          top: "50%",
          right: "20px",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          border: "none",
          padding: "12px",
          borderRadius: "50%",
          color: "#fff",
          cursor: "pointer",
          zIndex: 20,
        }}
      >
        <FaChevronRight size={20} />
      </button>
    </div>
  );
};

export default TestimonialSlider;
