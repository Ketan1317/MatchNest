import React from "react";

const Login = () => {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Left Side - Brand */}
      <div className="w-1/2 flex items-center justify-center bg-gradient-to-br from-pink-500 via-pink-600 to-red-400 animate-slide-in-left">
        <h1 className="font-[Rock_Salt] text-white text-5xl md:text-6xl font-bold drop-shadow-lg">
          MatchNest
        </h1>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-1/2 flex items-center justify-center bg-gradient-to-b from-pink-50 to-white p-5 animate-slide-in-right">
        <div className="w-full max-w-md bg-gradient-to-br from-white to-pink-50 shadow-lg rounded-2xl p-8 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-pink-500 tracking-wide">
            Welcome Back
          </h2>

          <form className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-gray-600 text-sm font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-full outline-none transition focus:border-pink-500 focus:ring focus:ring-pink-200"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-600 text-sm font-semibold mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-full outline-none transition focus:border-pink-500 focus:ring focus:ring-pink-200"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-pink-600 to-pink-500 text-white rounded-full font-bold text-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              Log In
            </button>
          </form>

          <p className="mt-5 text-center text-gray-600 text-sm">
            New to MatchNest?{" "}
            <a
              href="/signup"
              className="text-pink-600 font-semibold hover:text-pink-700 transition"
            >
              Create Account
            </a>
          </p>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes slide-in-left {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slide-in-right {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
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

export default Login;
