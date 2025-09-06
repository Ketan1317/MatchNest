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
    <div style={{ minHeight: "100vh" }}>
      <Header />

      <section
        style={{
          maxWidth: "900px",
          margin: "120px auto 80px",
          padding: "60px",
          borderRadius: "24px",
          background: "white",
          boxShadow: "0 20px 60px rgba(0,0,0,0.15), 0 10px 30px rgba(0,0,0,0.1)",
          transform: "perspective(1000px) translateZ(0) translateY(-10px)",
          transition: "all 0.5s ease",
          animation: "float 4s ease-in-out infinite",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "perspective(1000px) translateZ(20px) translateY(-20px) rotateX(2deg) rotateY(2deg)";
          e.currentTarget.style.boxShadow = "0 30px 80px rgba(0,0,0,0.2), 0 15px 40px rgba(0,0,0,0.15)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "perspective(1000px) translateZ(0) translateY(-10px) rotateX(0deg) rotateY(0deg)";
          e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.15), 0 10px 30px rgba(0,0,0,0.1)";
        }}
      >
        <h2
          style={{
            fontSize: "36px",
            fontWeight: "800",
            textAlign: "center",
            marginBottom: "20px",
            fontFamily: "Michroma, sans-serif",
            color: "#2d3748",
            background: "linear-gradient(90deg, #ec4899, #f43f5e)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Create Your Perfect Profile 💍
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#6b7280",
            fontSize: "16px",
            marginBottom: "40px",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Fill in your details to create a vibrant profile that showcases who you are!
        </p>

        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <label
            htmlFor="profileImage"
            style={{
              display: "inline-block",
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "5px solid #ec4899",
              cursor: "pointer",
              position: "relative",
              boxShadow: "0 8px 20px rgba(236,72,153,0.2)",
              transition: "all 0.4s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={
                formData.previewUrl ||
                "https://via.placeholder.com/180?text=Upload+Photo"
              }
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.4s ease",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                background: "gray",
                color: "#fff",
                fontSize: "16px",
                padding: "10px",
                textAlign: "center",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                transition: "background 0.3s ease",
              }}
            >
              <FaImage />
            </div>
          </label>
          <input
            type="file"
            id="profileImage"
            name="profileImage"
            accept="image/*"
            onChange={handleChange}
            style={{ display: "none" }}
          />
        </div>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "grid",
            gap: "30px",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#2d3748",
                marginBottom: "15px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Personal Information
            </h3>
            <div style={{ display: "flex", gap: "20px" }}>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
                style={{ ...inputStyle, flex: 1 }}
              />
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                style={{
                  ...inputStyle,
                  flex: 1,
                  background: "linear-gradient(90deg, #fff, #fef1f5)",
                  color: "#444",
                }}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div style={{ display: "flex", gap: "20px" }}>
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              required
              style={{ ...inputStyle, flex: 1 }}
            />
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              style={{
                ...inputStyle,
                flex: 1,
                background: "linear-gradient(90deg, #fff, #fef1f5)",
                color: "#444",
              }}
            />
          </div>

          <div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#2d3748",
                marginBottom: "15px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Contact Details
            </h3>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              style={{ ...inputStyle, marginTop: "20px" }}
            />
          </div>

          <div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#2d3748",
                marginBottom: "15px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Additional Information
            </h3>
            <textarea
              name="address"
              placeholder="Your Address"
              value={formData.address}
              onChange={handleChange}
              style={{ ...inputStyle, height: "90px" }}
            />
            <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
              <input
                type="text"
                name="religion"
                placeholder="Religion"
                value={formData.religion}
                onChange={handleChange}
                style={{ ...inputStyle, flex: 1 }}
              />
              <input
                type="text"
                name="caste"
                placeholder="Caste (Optional)"
                value={formData.caste}
                onChange={handleChange}
                style={{ ...inputStyle, flex: 1 }}
              />
            </div>
          </div>

          <div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#2d3748",
                marginBottom: "15px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Professional & Personal Interests
            </h3>
            <div style={{ display: "flex", gap: "20px" }}>
              <input
                type="text"
                name="profession"
                placeholder="Profession"
                value={formData.profession}
                onChange={handleChange}
                style={{ ...inputStyle, flex: 1 }}
              />
              <input
                type="text"
                name="education"
                placeholder="Education"
                value={formData.education}
                onChange={handleChange}
                style={{ ...inputStyle, flex: 1 }}
              />
            </div>
            <textarea
              name="hobbies"
              placeholder="Hobbies & Interests (Optional)"
              value={formData.hobbies}
              onChange={handleChange}
              style={{ ...inputStyle, height: "90px", marginTop: "20px" }}
            />
          </div>

          <div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#2d3748",
                marginBottom: "15px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              About You
            </h3>
            <textarea
              name="bio"
              placeholder="Write a short bio about yourself (tell us your story!)"
              value={formData.bio}
              onChange={handleChange}
              style={{ ...inputStyle, height: "140px" }}
            />
          </div>

          <button
            type="submit"
            style={{
              padding: "18px 35px",
              background: "linear-gradient(90deg, #ec4899, #f43f5e)",
              color: "#fff",
              fontSize: "18px",
              fontWeight: "700",
              border: "none",
              borderRadius: "12px",
              cursor: "pointer",
              transition: "all 0.4s ease",
              boxShadow: "0 8px 20px rgba(236,72,153,0.5)",
              fontFamily: "Inter, sans-serif",
              letterSpacing: "0.5px",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 12px 25px rgba(236,72,153,0.6)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(236,72,153,0.5)";
            }}
          >
            Save Your Profile
          </button>
        </form>
      </section>

      <style jsx>{`
        @keyframes float {
          0% { transform: perspective(1000px) translateZ(0) translateY(-10px); }
          50% { transform: perspective(1000px) translateZ(10px) translateY(-15px); }
          100% { transform: perspective(1000px) translateZ(0) translateY(-10px); }
        }
        input:focus, select:focus, textarea:focus {
          border-color: #ec4899;
          box-shadow: 0 0 0 3px rgba(236, 72, 153, 0.2);
          transform: scale(1.01);
        }
      `}</style>
    </div>
  );
};

const inputStyle = {
  padding: "16px 20px",
  fontSize: "16px",
  border: "1px solid #e5e7eb",
  borderRadius: "12px",
  outline: "none",
  transition: "all 0.3s ease",
  boxShadow: "0 3px 8px rgba(0,0,0,0.05)",
  background: "#fff",
  fontFamily: "Inter, sans-serif",
};

export default Profile;