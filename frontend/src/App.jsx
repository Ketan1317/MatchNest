import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Faq from "./pages/Faq";
import Developers from "./pages/Developers";
import Chat from "./pages/Chat";
import Match from "./pages/Match";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/developer" element={<Developers />} />
        <Route path="/chat" element={<Chat/>} />
        <Route path="/matches" element={<Match />} />
      </Routes>
    </div>
  );
};

export default App;
