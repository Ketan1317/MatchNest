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

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profileImage") {
      const file = files[0];
      if (file) {
        setFormData({
          ...formData,
          profileImage: file,
          previewUrl: URL.createObjectURL(file),
        });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="max-w-4xl mx-auto mt-32 mb-20 p-12 rounded-3xl bg-white shadow-2xl transform transition-all animate-float hover:scale-[1.02] hover:shadow-3xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-5 font-michroma text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-pink-500">
          Create Your Perfect Profile 💍
        </h2>
        <p className="text-center text-gray-500 text-base mb-10 font-inter">
          Fill in your details to create a vibrant profile that showcases who you are!
        </p>

        {/* Profile Image */}
        <div className="text-center mb-10">
          <label
  htmlFor="profileImage"   // ✅ Added this line
  className="inline-block w-44 h-44 rounded-full overflow-hidden border-4 border-pink-500 cursor-pointer relative shadow-lg transition-transform duration-300 hover:scale-105"
>
  <img
    src={formData.previewUrl || "https://via.placeholder.com/180?text=Upload+Photo"}
    alt="Profile"
    className="w-full h-full object-cover transition-transform duration-300"
  />
  <div className="absolute bottom-0 w-full bg-gray-700 text-white text-sm py-2 flex items-center justify-center gap-2 font-semibold">
    <FaImage />
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

        <form onSubmit={handleSubmit} className="grid gap-8">
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 font-inter">
              Personal Information
            </h3>
            <div className="flex gap-4 flex-wrap">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="flex-1 p-4 border border-gray-200 rounded-xl outline-none shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-200 transition"
              />
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="flex-1 p-4 border border-gray-200 rounded-xl outline-none shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-200 transition bg-gradient-to-r from-white to-pink-50"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="flex gap-4 flex-wrap">
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              required
              className="flex-1 p-4 border border-gray-200 rounded-xl outline-none shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-200 transition"
            />
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="flex-1 p-4 border border-gray-200 rounded-xl outline-none shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-200 transition bg-gradient-to-r from-white to-pink-50 text-gray-700"
            />
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 font-inter">
              Contact Details
            </h3>
            <div className="flex flex-col gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="p-4 border border-gray-200 rounded-xl outline-none shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-200 transition"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="p-4 border border-gray-200 rounded-xl outline-none shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-200 transition"
              />
            </div>
          </div>

          {/* Additional Info */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 font-inter">
              Additional Information
            </h3>
            <textarea
              name="address"
              placeholder="Your Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-4 border border-gray-200 rounded-xl outline-none shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-200 transition h-24"
            />
            <div className="flex gap-4 flex-wrap mt-4">
              <input
                type="text"
                name="religion"
                placeholder="Religion"
                value={formData.religion}
                onChange={handleChange}
                className="flex-1 p-4 border border-gray-200 rounded-xl outline-none shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-200 transition"
              />
              <input
                type="text"
                name="caste"
                placeholder="Caste (Optional)"
                value={formData.caste}
                onChange={handleChange}
                className="flex-1 p-4 border border-gray-200 rounded-xl outline-none shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-200 transition"
              />
            </div>
          </div>

          {/* Professional Info */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 font-inter">
              Professional & Personal Interests
            </h3>
            <div className="flex gap-4 flex-wrap">
              <input
                type="text"
                name="profession"
                placeholder="Profession"
                value={formData.profession}
                onChange={handleChange}
                className="flex-1 p-4 border border-gray-200 rounded-xl outline-none shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-200 transition"
              />
              <input
                type="text"
                name="education"
                placeholder="Education"
                value={formData.education}
                onChange={handleChange}
                className="flex-1 p-4 border border-gray-200 rounded-xl outline-none shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-200 transition"
              />
            </div>
            <textarea
              name="hobbies"
              placeholder="Hobbies & Interests (Optional)"
              value={formData.hobbies}
              onChange={handleChange}
              className="w-full p-4 mt-4 border border-gray-200 rounded-xl outline-none shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-200 transition h-24"
            />
          </div>

          {/* Bio */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 font-inter">
              About You
            </h3>
            <textarea
              name="bio"
              placeholder="Write a short bio about yourself (tell us your story!)"
              value={formData.bio}
              onChange={handleChange}
              className="w-full p-4 border border-gray-200 rounded-xl outline-none shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-200 transition h-36"
            />
          </div>

          <button
            type="submit"
            className="px-10 py-5 bg-gradient-to-r from-pink-600 to-pink-500 text-white text-lg font-bold rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Save Your Profile
          </button>
        </form>
      </section>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(-10px);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(-10px);
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
