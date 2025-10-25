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
    <section className="relative overflow-hidden bg-white py-8">
      {/* Header Section */}
      <div className="relative mb-10 flex h-[80vh] items-center justify-center overflow-hidden">
        {/* Left Hand */}
        <img
          src={leftHand}
          alt="Left Hand"
          className="absolute left-0 top-1/2 h-[450px] -translate-y-1/2 animate-slideInLeft"
        />

        {/* Header Content */}
        <div className="z-10 max-w-[850px] px-6 text-center">
          <h1 className="mb-6 text-5xl font-extrabold font-[Michroma] md:text-6xl bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent animate-fadeIn">
            Discover Our Features
          </h1>
          <p className="text-lg font-medium leading-relaxed text-gray-700 md:text-xl">
            Explore how <strong>MatchNest</strong> helps you connect, chat, and
            discover your ideal partner with innovative tools designed for trust
            and meaningful relationships. From smart matchmaking to secure
            interactions, everything is built to bring people closer with
            confidence.
          </p>
        </div>

        {/* Right Hand */}
        <img
          src={rightHand}
          alt="Right Hand"
          className="absolute right-0 top-1/2 h-[450px] -translate-y-1/2 animate-slideInRight"
        />
      </div>

      {/* Features List */}
      <div className="relative mx-auto min-h-[80vh] max-w-[1200px] px-5 py-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`relative mb-10 flex min-h-[80vh] flex-col items-center justify-center overflow-hidden rounded-xl p-10 shadow-lg transition-transform duration-300 hover:scale-[1.02] ${
              index % 2 === 0 ? "bg-gray-50" : "bg-white"
            }`}
          >
            {/* Parallax Background */}
            <div
              className="absolute inset-0 -z-10 bg-cover bg-center bg-fixed"
              style={{ backgroundImage: `url(${feature.img})` }}
            ></div>

            {/* Content Box */}
            <div className="relative z-10 w-full max-w-3xl rounded-lg bg-white/80 p-5 text-center backdrop-blur-sm">
              <h2 className="mb-6 text-4xl font-extrabold leading-tight bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500 bg-clip-text text-transparent animate-shine cursor-default">
                {feature.title}
              </h2>
              <p className="mx-auto max-w-2xl text-lg font-medium leading-relaxed text-gray-600 transition-all duration-300 hover:scale-[1.02] hover:text-gray-900">
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Animations */}
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
        .animate-fadeIn {
          animation: fadeIn 1.5s ease-out forwards;
        }
        .animate-slideInLeft {
          animation: slideInLeft 1.2s ease-out forwards;
        }
        .animate-slideInRight {
          animation: slideInRight 1.2s ease-out forwards;
        }
        .animate-shine {
          background-size: 200% auto;
          animation: shine 6s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Features;
