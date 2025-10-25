import React from "react";
import Header from "../components/Header";
import { FaVideo, FaPhone } from "react-icons/fa";
import bg from "../assets/okkk.jpg";
import img1 from "../assets/hey.jpg";
import img2 from "../assets/hey1.jpg";
import img3 from "../assets/hey4.jpg";
import img4 from "../assets/hey3.jpg";

const Chat = () => {
  const friends = [
    { name: "Alice", msg: "See you tomorrow", time: "10:24 AM", img: img1 },
    { name: "Bob", msg: "How’s the plan going?", time: "09:15 AM", img: img2 },
    { name: "Charlie", msg: "Call me when free", time: "Yesterday", img: img3 },
    { name: "Sophia", msg: "Sent a photo 📷", time: "Yesterday", img: img4 },
  ];

  return (
    <div className="flex flex-col h-screen">
      <Header />

      <div className="flex flex-1 mt-[72px]">
        {/* Left Sidebar - Friends List */}
        <div className="w-80 bg-white border-r border-gray-200 flex flex-col p-4 shadow-sm">
          <h3 className="text-lg font-bold text-[#a35645] mb-5">Chats</h3>
          {friends.map((friend, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer mb-2 transition-all ${
                index === 0
                  ? "bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-md"
                  : "bg-transparent text-gray-800 shadow-sm hover:bg-gray-100"
              }`}
            >
              <img
                src={friend.img}
                alt={friend.name}
                className={`w-11 h-11 rounded-full object-cover ${
                  index === 0 ? "border-2 border-white" : "border-2 border-gray-200"
                }`}
              />
              <div className="flex-1">
                <div className="font-semibold text-sm mb-0.5">{friend.name}</div>
                <div className={`text-xs ${index === 0 ? "text-white/90" : "text-gray-500"}`}>
                  {friend.msg}
                </div>
              </div>
              <div className={`text-[10px] ${index === 0 ? "text-white/90" : "text-gray-400"}`}>
                {friend.time}
              </div>
            </div>
          ))}
        </div>

        {/* Right Chat Section */}
        <div
          className="flex-1 flex flex-col bg-cover bg-center"
          style={{ backgroundImage: `url(${bg})` }}
        >
          {/* Chat Header */}
          <div className="flex justify-between items-center bg-white/90 p-4 border-b border-gray-200 shadow-sm">
            <div className="flex items-center gap-3">
              <img
                src={img1}
                alt="Alice"
                className="w-10 h-10 rounded-full object-cover border-2 border-pink-500"
              />
              <h3 className="font-semibold text-[#a35645]">Alice</h3>
            </div>
            <div className="flex gap-3">
              <button className="bg-gradient-to-r from-pink-500 to-red-500 p-2 rounded-full text-white">
                <FaPhone />
              </button>
              <button className="bg-gradient-to-r from-pink-500 to-red-500 p-2 rounded-full text-white">
                <FaVideo />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-5 overflow-y-auto flex flex-col gap-3">
            <div className="self-start bg-white/90 text-gray-800 max-w-[60%] px-4 py-2 rounded-xl">
              Hey, how are you?
            </div>
            <div className="self-end bg-gradient-to-r from-pink-500 to-red-500 text-white max-w-[60%] px-4 py-2 rounded-xl">
              I’m good! How about you?
            </div>
            <div className="self-start bg-white/90 text-gray-800 max-w-[60%] px-4 py-2 rounded-xl">
              Excited for our wedding plan 😍
            </div>
            <div className="self-end bg-gradient-to-r from-pink-500 to-red-500 text-white max-w-[60%] px-4 py-2 rounded-xl">
              Me too
            </div>
          </div>

          {/* Input */}
          <div className="flex p-3 bg-white/90 border-t border-gray-200">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 border rounded-md outline-none text-sm"
            />
            <button className="ml-3 bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-md font-semibold shadow-md">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
