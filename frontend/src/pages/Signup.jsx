import React from "react";

const Signup = () => {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Left Side - Form */}
      <div className="w-1/2 flex items-center justify-center bg-gradient-to-b from-pink-50 to-white p-6 animate-slide-in-left">
        <div className="w-full max-w-md bg-gradient-to-tr from-pink-50/95 to-white/95 shadow-[0_8px_24px_rgba(236,72,153,0.4)] rounded-2xl p-9 transition-transform duration-300 hover:scale-[1.01]">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center bg-gradient-to-r from-red-600 to-pink-500 bg-clip-text text-transparent mb-6 tracking-wide">
            Join MatchNest
          </h2>

          <form className="mb-5 space-y-4">
            {/* Username */}
            <div>
              <label className="block text-gray-800 text-sm font-semibold mb-1">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full px-4 py-3 border border-gray-300 rounded-full outline-none text-gray-800 text-sm transition focus:border-pink-500"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-800 text-sm font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-full outline-none text-gray-800 text-sm transition focus:border-pink-500"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-800 text-sm font-semibold mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Create a password"
                className="w-full px-4 py-3 border border-gray-300 rounded-full outline-none text-gray-800 text-sm transition focus:border-pink-500"
                required
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-gray-800 text-sm font-semibold mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-full outline-none text-gray-800 text-sm transition focus:border-pink-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-red-600 to-pink-500 text-white rounded-full font-bold text-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-gray-600 text-sm">
            Already have an account?{" "}
            <a
              href="/"
              className="text-red-600 font-semibold hover:text-red-700 transition"
            >
              Log In
            </a>
          </p>
        </div>
      </div>

      {/* Right Side - Branding */}
      <div className="w-1/2 flex items-center justify-center bg-gradient-to-br from-pink-500 via-red-600 to-red-400 animate-slide-in-right">
        <h1 className='font-["Rock_Salt",cursive] text-white text-6xl md:text-7xl font-bold drop-shadow-lg'>
          MatchNest
        </h1>
      </div>

      {/* Tailwind Animations */}
      <style>{`
        @keyframes slide-in-left {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slide-in-right {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Signup;
