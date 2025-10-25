import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="bg-white overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="mt-[69px] h-[48vh] flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-pink-500 to-red-500 rounded-b-[50px] shadow-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-5 font-michroma text-white drop-shadow-lg">
          About <span className="font-rocksalt">MatchNest</span>
        </h1>
        <p className="text-lg md:text-xl text-white font-semibold max-w-3xl leading-relaxed drop-shadow-sm">
          At MatchNest, we believe in turning swipes into lifelong stories.  
          From fun chats to wedding bells 💍, our platform bridges the gap  
          between dating and meaningful relationships.
        </p>
      </section>

      {/* Our Mission */}
      <section className="py-24 px-6 text-center bg-gradient-to-b from-white to-pink-50">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-red-500 font-michroma">
          Our Mission
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-medium">
          MatchNest is more than just a dating app — it’s a journey towards
          meaningful connections. We empower individuals and families to find
          love in a safe, respectful, and genuine way. Whether you’re looking
          for casual companionship 💞 or a soulmate, MatchNest is here to guide
          you every step of the way.
        </p>
      </section>

      {/* Our Vision */}
      <section className="py-24 px-6 text-center bg-white">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-red-500 font-michroma">
          Our Vision
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-medium">
          Our vision is to become the most trusted global platform for building
          meaningful relationships — from friendships to marriages. We aim to
          redefine modern matchmaking by blending technology with authenticity,
          helping people find partners who truly align with their values,
          culture, and dreams.
        </p>
      </section>

      {/* Our Values */}
      <section className="py-24 px-6 text-center bg-gradient-to-b from-pink-50 to-white">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-red-500 font-michroma">
          Our Values
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-medium">
          At MatchNest, safety, authenticity, and inclusivity are at the heart
          of everything we do. We ensure every connection is respectful and
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
