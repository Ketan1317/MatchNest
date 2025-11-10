import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import videoo from "/kiara2.mp4";

import Header from "../components/Header";
import { FaVideo, FaPhone } from "react-icons/fa";
import bg from "../assets/okkk.jpg";
import img1 from "../assets/hey.jpg";

const socket = io("https://matchnest-cdcy.onrender.com/");

const Chat = () => {
  const [username, setUsername] = useState("");
  const [roomId, setRoomId] = useState("");
  const [isJoined, setIsJoined] = useState(false);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const [users, setUsers] = useState([]); // ✅ user list

  useEffect(() => {
    socket.on("receive-message", (data) => {
      setMessages((prev) => [
        ...prev,
        { ...data, time: formatTime(new Date()) },
      ]);
    });

    socket.on("user-joined", (data) => {
      setMessages((prev) => [
        ...prev,
        { system: true, text: `${data.username} joined!` },
      ]);

      socket.emit("get-users-in-room"); // ✅ update list
    });

    socket.on("user-left", (data) => {
      setMessages((prev) => [
        ...prev,
        { system: true, text: `${data.username} left!` },
      ]);

      socket.emit("get-users-in-room"); // ✅ update list
    });

    socket.on("users-in-room", (data) => {
      setUsers(data);
    });

    return () => {
      socket.off("receive-message");
      socket.off("user-joined");
      socket.off("user-left");
      socket.off("users-in-room");
    };
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const joinRoom = () => {
    const trimmedUsername = username.trim();
    const trimmedRoomId = roomId.trim();

    if (!trimmedUsername || !trimmedRoomId) {
      return alert("Enter username and room ID");
    }

    socket.emit("new-user", trimmedUsername);
    socket.emit("join-room", trimmedRoomId);

    socket.emit("get-users-in-room"); // ✅ request users

    setIsJoined(true);
  };

  const sendMessage = () => {
    const trimmedMessage = message.trim();
    if (!trimmedMessage) return;

    const msgData = {
      username,
      text: trimmedMessage,
      roomId,
      time: formatTime(new Date()),
    };

    socket.emit("send-message", msgData);
    setMessage("");
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />

      {!isJoined ? (
        <div className="relative flex mt-[70px] flex-col items-center justify-center flex-1 h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute w-full h-full object-cover blur-xs"
          >
            <source src={videoo} type="video/mp4" />
          </video>

          <div
            className="relative z-10 flex flex-col items-center justify-center 
                gap-5 p-8 bg-white/10 backdrop-blur-lg rounded-2xl 
                shadow-2xl w-full max-w-xl mx-4"
          >
            <h2
              className="text-4xl font-bold tracking-wide bg-gradient-to-r 
                 from-rose-500 to-pink-600 bg-clip-text text-transparent 
                 drop-shadow-sm"
            >
              Join Room
            </h2>

            <input
              type="text"
              placeholder="Enter username"
              className="border border-white/40 bg-white/20 text-white placeholder-white/80 
               px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 
               focus:ring-pink-400 transition shadow-sm"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="text"
              placeholder="Room ID"
              className="border border-white/40 bg-white/20 text-white placeholder-white/80 
               px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 
               focus:ring-pink-400 transition shadow-sm"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
            />

            <button
              onClick={joinRoom}
              className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-3 
               rounded-lg cursor-pointer shadow-lg font-semibold hover:shadow-xl 
               transform hover:scale-105 active:scale-95 
               transition-all duration-200 w-full"
            >
              Join
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-1 mt-[72px]">

          {/* Sidebar */}
          <div className="w-80 bg-white/90 backdrop-blur-3xl border-r border-gray-200 flex flex-col p-5 shadow-md">

            <div className="mb-6">
              <h3 className="text-xl font-bold text-[#a35645] flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                Room: {roomId}
              </h3>
              <p className="text-md font-semibold text-gray-500 mt-1">
                Connected • Active
              </p>
            </div>

            <div className="mb-6 bg-gray-50 border border-gray-200 px-4 py-3 rounded-lg shadow-sm">
              <p className="text-md font-semibold text-gray-700">Logged in as:</p>
              <p className="text-lg font-semibold text-[#a35645]">{username}</p>
            </div>

            {/* ✅ Users in room */}
            <div className="mt-3 bg-white/80 backdrop-blur-md border border-gray-200 px-4 py-3 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-gray-700 mb-2">People Here</h4>

              <div className="flex flex-col gap-2 max-h-40 overflow-y-auto">
                {users.map((u, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-2 rounded-lg bg-gray-100"
                  >
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <p className="text-sm font-medium text-gray-700">{u?.username}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Features Section */}
            <div className="flex flex-col gap-3 mt-4">
              <button className="flex items-center gap-3 px-3 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-md hover:shadow-lg transition-all">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                Start Voice Call
              </button>

              <button className="flex items-center gap-3 px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                Start Video Call
              </button>

              <button className="flex items-center gap-3 px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                Invite Friends
              </button>
            </div>
          </div>

          {/* Chat Section */}
          <div
            className="flex-1 flex flex-col bg-cover bg-center"
            style={{ backgroundImage: `url(${bg})` }}
          >

            {/* Chat Header */}
            <div className="flex justify-between items-center bg-white/90 p-4 border-b border-gray-200 shadow-sm">
              <div className="flex items-center gap-3">
                <img
                  src={img1}
                  alt="avatar"
                  className="w-10 h-10 rounded-full object-cover border-2 border-pink-500"
                />
                <h3 className="font-semibold text-[#a35645]">{username}</h3>
              </div>

              <div className="flex gap-3">
                <button className="bg-gradient-to-r from-pink-500 to-red-500 p-2 rounded-full text-white hover:scale-110 transition">
                  <FaPhone />
                </button>
                <button className="bg-gradient-to-r from-pink-500 to-red-500 p-2 rounded-full text-white hover:scale-110 transition">
                  <FaVideo />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-5 overflow-y-auto flex flex-col gap-4">
              {messages.map((msg, index) =>
                msg.system ? (
                  <div
                    key={index}
                    className="self-center bg-black/40 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md"
                  >
                    {msg.text}
                  </div>
                ) : msg.username === username ? (
                  <div key={index} className="self-end max-w-[70%]">
                    <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-2xl shadow-md">
                      {msg.text}
                    </div>
                    <div className="text-xs text-white/70 mt-1 text-right">
                      {msg.time}
                    </div>
                  </div>
                ) : (
                  <div key={index} className="self-start max-w-[70%]">
                    <div className="bg-white/90 text-gray-800 px-4 py-2 rounded-2xl shadow-sm">
                      <span className="font-semibold text-pink-600">
                        {msg.username}:{" "}
                      </span>
                      {msg.text}
                    </div>
                    <div className="text-xs font-semibold text-gray-500 mt-1">{msg.time}</div>
                  </div>
                )
              )}
            </div>

            {/* Input chat */}
            <div className="flex p-3 bg-white/90 shadow-2xl border-t border-gray-200">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 border rounded-md outline-none text-sm focus:ring-2 focus:ring-pink-400"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button
                className="ml-3 bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-md font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                onClick={sendMessage}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
