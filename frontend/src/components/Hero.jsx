import React from "react";
import videoBg from "../assets/okokFinal.mp4";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative pt-40 md:pt-52 min-h-[92vh] flex flex-col items-center justify-center text-center overflow-hidden mt-[70px]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={videoBg} />
      </video>

      <div className="absolute inset-0 bg-black/50 z-10" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-20 px-4 text-center"
      >
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-snug -mt-11">
          <span className="font-['Rock_Salt',cursive]">MatchNest : </span>
          <span className="font-['Michroma',sans-serif] bg-gradient-to-r from-pink-400 via-rose-500 to-pink-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-[shine_4s_linear_infinite]">
            From Casual Chats to Wedding Bells...
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
          MatchNest helps you connect with people who matter — from fun dates 💕
          to lifelong partners. Swipe, Match, Chat, and Video Call in one place.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold rounded-full hover:shadow-[0_0_20px_rgba(244,63,94,0.6)] hover:scale-105 transition-all duration-300 shadow-lg">
            Get Started
          </button>
          <button className="px-8 py-3 border-2 border-pink-500 text-pink-500 rounded-full font-bold hover:bg-pink-500 hover:text-white hover:shadow-[0_0_20px_rgba(244,63,94,0.5)] transition-all duration-300">
            Learn More
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
