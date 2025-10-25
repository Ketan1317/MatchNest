import React from "react";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Faq from "./pages/Faq";
import Chat from "./pages/Chat";
import Match from "./pages/Match";
import VideoCall from "./pages/VideoCall";

const App = () => {
  return (
    <div>
      <Toaster />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/matches" element={<Match />} />
        <Route path="/vc" element={<VideoCall />} />
      </Routes>
    </div>
  );
};

export default App;
