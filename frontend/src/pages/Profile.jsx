import React, { useState } from "react";
import Header from "../components/Header";
import { FaImage } from "react-icons/fa";

const Profile = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    age: "",
    dob: "",
    email: "",
    phone: "",
    address: "",
    religion: "",
    caste: "",
    profession: "",
    education: "",
    hobbies: "",
    bio: "",
    profileImage: null,
    previewUrl: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "profileImage") {
      const file = files[0];
      if (file) {
        setFormData((prev) => ({
          ...prev,
          profileImage: file,
          previewUrl: URL.createObjectURL(file),
        }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Profile saved successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white text-gray-800">
      <Header />

      <section className="max-w-4xl mx-auto mt-32 mb-20 p-8 sm:p-12 rounded-3xl bg-white shadow-2xl transform transition-all animate-float hover:scale-[1.02] hover:shadow-3xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-3 font-michroma text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-pink-500">
          Craft Your Perfect Profile ✨
        </h2>
        <p className="text-center text-gray-500 mb-10 font-inter">
          Tell your story beautifully — let others see the real you!
        </p>

        {/* Profile Image Upload */}
        <div className="text-center mb-10">
          <label
            htmlFor="profileImage"
            className="inline-block w-44 h-44 rounded-full overflow-hidden border-4 border-pink-500 cursor-pointer relative shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={
                formData.previewUrl ||
                "https://via.placeholder.com/180?text=Upload+Photo"
              }
              alt="Profile Preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 w-full bg-gray-800 bg-opacity-70 text-white text-sm py-2 flex items-center justify-center gap-2 font-semibold">
              <FaImage />
              Upload
            </div>
          </label>

          <input
            type="file"
            id="profileImage"
            name="profileImage"
            accept="image/*"
            onChange={handleChange}
            className="hidden"
          />
        </div>

        {/* Profile Form */}
        <form onSubmit={handleSubmit} className="grid gap-8 font-inter">
          {/* Personal Info */}
          <section>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              👤 Personal Information
            </h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="flex-1 p-4 border border-gray-200 rounded-xl focus:border-pink-500 focus:ring focus:ring-pink-200 outline-none shadow-sm transition"
              />
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="flex-1 p-4 border border-gray-200 rounded-xl bg-gradient-to-r from-white to-pink-50 focus:border-pink-500 focus:ring focus:ring-pink-200 outline-none shadow-sm transition"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </section>

          {/* Age & DOB */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="number"
              name="age"
              placeholder="Enter your age"
              value={formData.age}
              onChange={handleChange}
              required
              className="flex-1 p-4 border border-gray-200 rounded-xl focus:border-pink-500 focus:ring focus:ring-pink-200 outline-none shadow-sm transition"
            />
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="flex-1 p-4 border border-gray-200 rounded-xl bg-gradient-to-r from-white to-pink-50 focus:border-pink-500 focus:ring focus:ring-pink-200 outline-none shadow-sm transition text-gray-700"
            />
          </div>

          {/* Contact Info */}
          <section>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              📞 Contact Information
            </h3>
            <div className="flex flex-col gap-4">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="p-4 border border-gray-200 rounded-xl focus:border-pink-500 focus:ring focus:ring-pink-200 outline-none shadow-sm transition"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="p-4 border border-gray-200 rounded-xl focus:border-pink-500 focus:ring focus:ring-pink-200 outline-none shadow-sm transition"
              />
            </div>
          </section>

          {/* Additional Info */}
          <section>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              🌸 Additional Information
            </h3>
            <textarea
              name="address"
              placeholder="Enter your full address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-4 border border-gray-200 rounded-xl focus:border-pink-500 focus:ring focus:ring-pink-200 outline-none shadow-sm transition h-24"
            />
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <input
                type="text"
                name="religion"
                placeholder="Religion (optional)"
                value={formData.religion}
                onChange={handleChange}
                className="flex-1 p-4 border border-gray-200 rounded-xl focus:border-pink-500 focus:ring focus:ring-pink-200 outline-none shadow-sm transition"
              />
              <input
                type="text"
                name="caste"
                placeholder="Caste or community (optional)"
                value={formData.caste}
                onChange={handleChange}
                className="flex-1 p-4 border border-gray-200 rounded-xl focus:border-pink-500 focus:ring focus:ring-pink-200 outline-none shadow-sm transition"
              />
            </div>
          </section>

          {/* Professional Info */}
          <section>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              💼 Career & Interests
            </h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="profession"
                placeholder="Current profession"
                value={formData.profession}
                onChange={handleChange}
                className="flex-1 p-4 border border-gray-200 rounded-xl focus:border-pink-500 focus:ring focus:ring-pink-200 outline-none shadow-sm transition"
              />
              <input
                type="text"
                name="education"
                placeholder="Highest qualification"
                value={formData.education}
                onChange={handleChange}
                className="flex-1 p-4 border border-gray-200 rounded-xl focus:border-pink-500 focus:ring focus:ring-pink-200 outline-none shadow-sm transition"
              />
            </div>
            <textarea
              name="hobbies"
              placeholder="List your hobbies and interests"
              value={formData.hobbies}
              onChange={handleChange}
              className="w-full p-4 mt-4 border border-gray-200 rounded-xl focus:border-pink-500 focus:ring focus:ring-pink-200 outline-none shadow-sm transition h-24"
            />
          </section>

          {/* Bio */}
          <section>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              💖 About You
            </h3>
            <textarea
              name="bio"
              placeholder="Share a few words about yourself — your dreams, passions, and story!"
              value={formData.bio}
              onChange={handleChange}
              className="w-full p-4 border border-gray-200 rounded-xl focus:border-pink-500 focus:ring focus:ring-pink-200 outline-none shadow-sm transition h-36"
            />
          </section>

          {/* Submit Button */}
          <button
            type="submit"
            className="px-10 py-5 bg-gradient-to-r from-pink-600 to-pink-500 text-white text-lg font-bold rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            💎 Save My Profile
          </button>
        </form>
      </section>

      {/* Floating animation */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(-8px);
          }
          50% {
            transform: translateY(-14px);
          }
          100% {
            transform: translateY(-8px);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Profile;
