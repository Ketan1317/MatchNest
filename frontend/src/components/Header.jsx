import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import toast from "react-hot-toast";
const navItems = [
  { name: "Dashboard", path: "/" },
  { name: "Matches", path: "/matches" },
  { name: "Chat", path: "/chat" },
  { name: "Profile", path: "/profile" },
  { name: "About", path: "/about" },
  {name:"Video Call",path:"/vc"},
  {name:"Faq",path:"/faq"},
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md shadow-md px-6 md:px-10 py-4 flex justify-between items-center transition-all duration-300">
      <h1 className="font-['Rock_Salt',cursive] text-2xl font-bold tracking-wide bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent drop-shadow-sm">
        MatchNest
      </h1>

      <nav className="hidden md:flex gap-6 items-center">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `font-semibold transition-colors duration-200 ${
                isActive ? "text-rose-600" : "text-gray-800"
              } hover:text-rose-500`
            }
          >
            {item.name}
          </NavLink>
        ))}

        <button
          onClick={() => {
            toast.success("Logout Successfully");
            navigate("/login");
          }}
          className="ml-4 px-4 py-2 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-200 shadow-md"
        >
          Logout
        </button>
      </nav>

      <button
        className="md:hidden text-3xl text-rose-600 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white/90 backdrop-blur-md shadow-md flex flex-col items-center gap-4 py-6 md:hidden animate-slideDown">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-lg font-semibold transition-colors duration-200 ${
                  isActive ? "text-rose-600" : "text-gray-800"
                } hover:text-rose-500`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <button
            onClick={() => {
              setMenuOpen(false);
              alert("Logout clicked");
            }}
            className="px-5 py-2 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-200 shadow-md"
          >
            Logout
          </button>
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.25s ease-out forwards;
        }
      `}</style>
    </header>
  );
};

export default Header;
