import React, { useState } from "react";
import { socket } from "../socket";
import videoo from "./kiara.mp4";
import { useNavigate } from "react-router-dom";

const JoinPage = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const navigate = useNavigate();

  const joinRoom = () => {
    if (!username.trim() || !room.trim()) return;

    socket.emit("new-user", username.trim());
    socket.emit("join-room", room.trim());

    localStorage.setItem("username", username.trim());
    localStorage.setItem("room", room.trim());

    navigate("/chat");
  };

  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover blur-sm"
      >
        <source src={videoo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Better Readability */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Form Container */}
      <div className="relative z-10 bg-white bg-opacity-90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md mx-4 transform transition-all duration-300 hover:scale-[1.02]">
        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
          Join Chat Room
        </h2>

        <input
          type="text"
          placeholder="Your Username"
          value={username}
          className="w-full p-4 mb-4 text-lg border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-100 transition-all placeholder-gray-400"
          onChange={(e) => setUsername(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && room && joinRoom()}
        />

        <input
          type="text"
          placeholder="Room ID"
          value={room}
          className="w-full p-4 mb-6 text-lg border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-100 transition-all placeholder-gray-400"
          onChange={(e) => setRoom(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && username && joinRoom()}
        />

        <button
          onClick={joinRoom}
          disabled={!username.trim() || !room.trim()}
          className="w-full p-4 text-white font-semibold text-lg rounded-xl bg-gradient-to-r from-pink-500 via-pink-600 to-red-600 hover:from-pink-600 hover:to-red-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transform transition-all duration-200 active:scale-95 shadow-lg"
        >
          Join Room
        </button>
      </div>
    </div>
  );
};

export default JoinPage;