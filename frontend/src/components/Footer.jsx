import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: "#fff5f7",
      color: "#374151",
      padding: "40px 60px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "wrap",
      boxShadow: "0 -4px 20px rgba(0,0,0,0.05)"
    }}>
      <div style={{ flex: "1 1 250px", marginBottom: "20px" }}>
        <h2 style={{
          fontFamily: "'Rock Salt', cursive",
          fontSize: "30px",
          fontWeight: "900",
          color: "#f43f5e",
          marginBottom: "8px"
        }}>
          MatchNest
        </h2>
        <p style={{ fontSize: "16px", fontWeight: "600", color: "#db2777", maxWidth: "220px" }}>
          Connecting hearts, creating futures.
        </p>
      </div>

      <div style={{
        flex: "2 1 500px",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "40px"
      }}>
        <div>
            
          <h4 style={{ fontSize: "18px", fontWeight: "800", color: "#f43f5e", marginBottom: "12px",fontFamily: "Michroma, sans-serif", }}>Company</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {["About Us", "Careers", "Blog"].map(item => (
              <li key={item} style={{ marginBottom: "10px" }}>
                <a
                  href="#"
                  style={{ color: "#db2777", textDecoration: "none", fontWeight: "700", fontSize: "16px", transition: "color 0.3s" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#f43f5e"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "#db2777"}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: "18px", fontWeight: "800", color: "#f43f5e", marginBottom: "12px",fontFamily: "Michroma, sans-serif", }}>Support</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {["Contact", "FAQs", "Live Chat"].map(item => (
              <li key={item} style={{ marginBottom: "10px" }}>
                <a
                  href="#"
                  style={{ color: "#db2777", textDecoration: "none", fontWeight: "700", fontSize: "16px", transition: "color 0.3s" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#f43f5e"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "#db2777"}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: "18px", fontWeight: "800", color: "#f43f5e", marginBottom: "12px" ,fontFamily: "Michroma, sans-serif",}}>Legal</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(item => (
              <li key={item} style={{ marginBottom: "10px" }}>
                <a
                  href="#"
                  style={{ color: "#db2777", textDecoration: "none", fontWeight: "700", fontSize: "16px", transition: "color 0.3s" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#f43f5e"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "#db2777"}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{
        width: "100%",
        marginTop: "40px",
        display: "flex",
        justifyContent: "center",
        gap: "25px",
        fontSize: "22px"
      }}>
        {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, index) => (
          <a
            key={index}
            href="#"
            style={{ color: "#f43f5e", transition: "color 0.3s" }}
            onMouseEnter={(e) => e.currentTarget.style.color = "#db2777"}
            onMouseLeave={(e) => e.currentTarget.style.color = "#f43f5e"}
          >
            <Icon />
          </a>
        ))}
      </div>

      <p style={{ fontSize: "14px", fontWeight: "600", color: "#9d174d", marginTop: "20px", textAlign: "center", width: "100%" }}>
        &copy; {new Date().getFullYear()} MatchNest. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
