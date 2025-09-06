import React from "react";
import videoBg from "../assets/okokFinal.mp4";

const Hero = () => {
  return (
    // ✅ Add padding-top to avoid overlap with fixed Header
    <section className="relative pt-52 min-h-[92vh] flex flex-col items-center justify-center text-center overflow-hidden mt-[70px]">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={videoBg}  />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white -mt-11 mb-6 leading-snug">
          <span className="font-['Rock_Salt',cursive]">MatchNest : </span>
          <span className="font-['Michroma',sans-serif]">
            From Casual Chats to Wedding Bells...
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
          MatchNest helps you connect with people who matter — from fun dates 💕
          to lifelong partners. Swipe, Match, Chat, and Video Call in one place.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg">
            Get Started
          </button>
          <button className="px-8 py-3 border-2 border-pink-500 text-pink-500 rounded-full font-bold hover:bg-pink-500 hover:text-white transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
