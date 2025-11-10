import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import avatar1 from "/img1.jpg";
import avatar2 from "/img2.jpg";
import avatar3 from "/img3.jpg";
import avatar4 from "/img4.jpg";
import avatar5 from "/img5.jpg";
import avatar6 from "/img6.jpg";

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

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () =>
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  const nextSlide = () =>
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <section className="relative w-full overflow-hidden">
      <h2 className="text-center text-4xl md:text-5xl font-bold mt-10 mb-8 bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
        What People Say
      </h2>

      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-full h-[100vh] relative flex items-center justify-center"
          >
             <img
              src={t.img}
              alt={t.name}
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/70"></div>

            <div className="relative z-10 text-center max-w-2xl px-6 text-white">
              <p className="text-2xl md:text-3xl font-semibold mb-6 leading-relaxed">
                “{t.text}”
              </p>
              <h3 className="text-lg md:text-xl font-bold text-pink-300">
                — {t.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-6 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full text-white transition-all z-20"
      >
        <FaChevronLeft size={22} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-6 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full text-white transition-all z-20"
      >
        <FaChevronRight size={22} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {testimonials.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              index === i ? "bg-pink-500 scale-110" : "bg-white/50"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSlider;
