import React, { useState, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import toast from "react-hot-toast";

// import img1 from "/hey.jpg";
import img2 from "/hey1.jpg";
import img3 from "/hey4.jpg";
import img4 from "/hey3.jpg";
import img5 from "/hey2.jpg";
import garvu from "/garvuuuu.jpg"

const people = [
  {
    name: "Garvuuuu",
    age: 24,
    location: "Sonipat",
    bio: "Coffee lover ☕ | Traveller ✈️ | Looking for meaningful connections ❤️",
    img: garvu,
  },
  {
    name: "Aarav",
    age: 27,
    location: "Delhi",
    bio: "Tech enthusiast 💻 | Music 🎶 | Swipe right if you love dogs 🐶",
    img: img2,
  },
  {
    name: "Ananya",
    age: 25,
    location: "Bangalore",
    bio: "Foodie 🍜 | Loves movies 🎬 | Dreamer 🌸",
    img: img3,
  },
  {
    name: "Rohan",
    age: 26,
    location: "Pune",
    bio: "Adventurer 🏔️ | Fitness freak 🏋️‍♂️ | Always up for a challenge!",
    img: img4,
  },
  {
    name: "Meera",
    age: 23,
    location: "Chennai",
    bio: "Artist 🎨 | Musician 🎶 | Believes in positivity 🌟",
    img: img5,
  },
];

const Match = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardRef = useRef(null);
  const posRef = useRef({ startX: 0, currentX: 0, isDragging: false });

  const handleNext = (direction) => {
    const person = people[currentIndex];

    // Show toast instead of alert
    if (direction === "right") toast.success(`You liked ${person.name}`);
    else toast.error(`You skipped ${person.name}`);

    // Reset card position
    if (cardRef.current) {
      cardRef.current.style.transition = "transform 0.3s ease";
      cardRef.current.style.transform = "translateX(0px) rotate(0deg)";
    }

    setCurrentIndex((prev) => (prev + 1) % people.length);
  };

  const handlePointerDown = (e) => {
    posRef.current.startX = e.clientX;
    posRef.current.isDragging = true;
    if (cardRef.current) cardRef.current.style.transition = "none";
  };

  const handlePointerMove = (e) => {
    if (!posRef.current.isDragging || !cardRef.current) return;
    posRef.current.currentX = e.clientX - posRef.current.startX;
    const rotate = posRef.current.currentX / 15;
    cardRef.current.style.transform = `translateX(${posRef.current.currentX}px) rotate(${rotate}deg)`;
  };

  const handlePointerUp = () => {
    posRef.current.isDragging = false;
    if (!cardRef.current) return;

    const threshold = 120;
    if (posRef.current.currentX > threshold) handleNext("right");
    else if (posRef.current.currentX < -threshold) handleNext("left");
    else {
      cardRef.current.style.transition = "transform 0.3s ease";
      cardRef.current.style.transform = "translateX(0px) rotate(0deg)";
    }
    posRef.current.currentX = 0;
  };

  if (currentIndex >= people.length) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-pink-50">
        <Header />
        <h2 className="text-2xl font-bold text-pink-700">No more matches!</h2>
        <Footer />
      </div>
    );
  }

  return (
    <div
      className="flex select-none
 flex-col min-h-screen bg-gradient-to-b from-pink-50 to-white"
    >
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r mt-[70px] from-pink-500 to-red-500 text-white my-16 text-center py-24 md:py-32 mb-10 rounded-b-3xl shadow-lg">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 font-michroma drop-shadow-md">
          Find Your Match Today! 💕
        </h1>
        <p className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-sm">
          Swipe through profiles and connect with people who share your vibes.
          Start your journey to love or friendship with MatchNest!
        </p>
      </section>

      {/* Swipe Cards */}
      <div className="flex justify-center px-4 relative h-[80vh]">
        {people
          .slice(currentIndex + 1, currentIndex + 3)
          .reverse()
          .map((person, i) => (
            <div
              key={i}
              className={`absolute w-full max-w-md h-full bg-gradient-to-br from-white to-pink-50 rounded-2xl shadow-xl border border-pink-100`}
              style={{ top: `${i * 10}px`, scale: 0.95 }}
            >
              <img
                src={person.img}
                alt={person.name}
                className="w-full h-1/2 object-cover border-b-2 border-pink-100"
              />
            </div>
          ))}

        <div
          ref={cardRef}
          className="absolute w-full max-w-md h-full bg-gradient-to-br from-white to-pink-50 rounded-2xl shadow-2xl border border-pink-100 overflow-hidden cursor-grab"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        >
          <img
            src={people[currentIndex].img}
            alt={people[currentIndex].name}
            className="w-full h-1/2 object-cover border-b-2 border-pink-100"
          />
          <div className="flex flex-col justify-between p-5 h-1/2">
            <div>
              <h2 className="text-2xl font-bold text-pink-800 mb-1 capitalize">
                {people[currentIndex].name}, {people[currentIndex].age}
              </h2>
              <p className="text-gray-600 italic mb-2">
                📍 {people[currentIndex].location}
              </p>
              <p className="text-gray-700 font-medium leading-relaxed">
                {people[currentIndex].bio}
              </p>
            </div>

            <div className="flex justify-around mt-6">
              <button
                onClick={() => handleNext("left")}
                className="w-14 h-14 rounded-full bg-gray-200 text-xl hover:scale-110 transition-transform shadow-md flex items-center justify-center"
              >
                ❌
              </button>
              <button
                onClick={() => handleNext("right")}
                className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white text-2xl font-bold hover:scale-110 transition-transform shadow-md flex items-center justify-center"
              >
                💖
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Match;
