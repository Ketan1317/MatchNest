import React from "react";
import { NavLink } from "react-router-dom";

// Centralized nav items
const navItems = [
  { name: "Dashboard", path: "/" },
  { name: "Matches", path: "/matches" },
  { name: "Chat", path: "/chat" },
  { name: "Profile", path: "/profile" },
  { name: "About", path: "/about" },
  { name: "Developers", path: "/developer" },
];

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md shadow-md px-8 py-4 flex justify-between items-center">
      {/* Logo */}
      <h1 className="font-['Rock_Salt',cursive] text-2xl font-bold tracking-wide bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent drop-shadow">
        MatchNest
      </h1>

      {/* Navigation */}
      <nav className="flex gap-6 items-center">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `font-semibold transition-colors ${
                isActive ? "text-rose-600" : "text-gray-800"
              } hover:text-rose-500`
            }
          >
            {item.name}
          </NavLink>
        ))}

        {/* Logout */}
        <button
          onClick={() => alert("Logout clicked")}
          className="ml-4 px-4 py-2 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-200 shadow-md"
        >
          Logout
        </button>
      </nav>
    </header>
  );
};

export default Header;
