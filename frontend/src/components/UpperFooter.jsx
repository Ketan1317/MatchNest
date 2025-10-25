import React from "react";

const UpperFooter = () => {
  return (
    <section className="h-[40vh] flex items-center justify-center text-center px-6 md:px-10">
      <div className="max-w-[700px]">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent mb-4">
          Why waste time? 💕
        </h2>

        <p className="text-gray-700 font-medium text-[1.1rem] leading-relaxed mb-6">
          Our website is faster than your crush replying to texts (yep, that fast 🚀).
          <br />
          Just sign up, swipe, chat, and boom – love is in the air.
          <br />
          No complicated steps, no boring waiting. Just pure vibes ✨
        </p>

        <button
          className="mt-3 px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-full shadow-md hover:scale-105 hover:shadow-lg transform transition-all duration-300"
        >
          Get Started Now 🚀
        </button>
      </div>
    </section>
  );
};

export default UpperFooter;
