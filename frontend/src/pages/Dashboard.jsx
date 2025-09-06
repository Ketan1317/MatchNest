import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import UpperFooter from "../components/UpperFooter";

const Dashboard = () => {
  return (
    <div style={{ background: "#ffffff" }}>
      <Header />
      <Hero />
      <Features />
      <Testimonials/>
      <UpperFooter/>
      <Footer />
    </div>
  );
};

export default Dashboard;
