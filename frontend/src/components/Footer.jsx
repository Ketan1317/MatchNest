import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-wrap justify-between items-start bg-rose-50 text-gray-700 px-10 py-10 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      
      {/* Brand Section */}
      <div className="flex-1 min-w-[250px] mb-6">
        <h2 className="font-['Rock_Salt'] text-3xl font-extrabold text-rose-500 mb-2">
          MatchNest
        </h2>
        <p className="text-pink-600 font-semibold text-base max-w-[220px]">
          Connecting hearts, creating futures.
        </p>
      </div>

      {/* Links Section */}
      <div className="flex-2 flex justify-between flex-wrap gap-10 min-w-[300px]">
        {/* Company */}
        <div>
          <h4 className="text-lg font-extrabold text-rose-500 mb-3 font-[Michroma]">
            Company
          </h4>
          <ul className="space-y-2">
            {["About Us", "Careers", "Blog"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-pink-600 font-bold text-base transition-colors duration-300 hover:text-rose-500"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-extrabold text-rose-500 mb-3 font-[Michroma]">
            Support
          </h4>
          <ul className="space-y-2">
            {["Contact", "FAQs", "Live Chat"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-pink-600 font-bold text-base transition-colors duration-300 hover:text-rose-500"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-lg font-extrabold text-rose-500 mb-3 font-[Michroma]">
            Legal
          </h4>
          <ul className="space-y-2">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-pink-600 font-bold text-base transition-colors duration-300 hover:text-rose-500"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Social Icons */}
      <div className="w-full mt-10 flex justify-center gap-6 text-2xl">
        {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, index) => (
          <a
            key={index}
            href="#"
            className="text-rose-500 transition-colors duration-300 hover:text-pink-600"
          >
            <Icon />
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p className="w-full mt-5 text-center text-sm font-semibold text-rose-800">
        &copy; {new Date().getFullYear()} MatchNest. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
