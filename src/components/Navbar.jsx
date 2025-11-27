import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // ✅ Debug line to see what's in user object
  console.log("User object in navbar:", user);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAvatarClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleProfile = () => {
    setShowDropdown(false);
    navigate("/volunteer-profile");
  };

  const handleLogout = () => {
    setShowDropdown(false);
    logout();
    navigate("/");
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.avatar-container')) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Helper function to get user initial
  const getUserInitial = (user) => {
    if (!user) return "U";
    const name = user.name || user.firstName || user.fullName || user.email || 'User';
    return name[0].toUpperCase();
  };

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: isScrolled ? "0.7rem 5vw" : "1rem 5vw",
    background: isScrolled
      ? "rgba(15, 23, 42, 0.85)"
      : "linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #1e3a5f 100%)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(56, 189, 248, 0.2)",
    color: "white",
    fontSize: "clamp(1rem, 1.2vw, 1.1rem)",
    fontWeight: "600",
    flexWrap: "wrap",
    boxShadow: isScrolled ? "0 2px 15px rgba(0,0,0,0.3)" : "none",
    position: "fixed",
    width: "100%",
    top: 0,
    zIndex: 1000,
    transition: "all 0.3s ease",
  };

  const logoStyle = {
    fontSize: "1.8rem",
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    color: "#67e8f9",
    textShadow: "0 0 10px rgba(56, 189, 248, 0.4)",
    letterSpacing: "0.5px",
  };

  const navLinksStyle = {
    display: "flex",
    gap: "2rem",
    flexWrap: "wrap",
  };

  const linkStyle = {
    color: "#f1f5f9",
    textDecoration: "none",
    transition: "color 0.3s ease, transform 0.2s ease",
    position: "relative",
    padding: "0.5rem 0",
  };

  const avatarStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "700",
    fontSize: "1.2rem",
    cursor: "pointer",
    boxShadow: "0 0 12px rgba(56, 189, 248, 0.4)",
    transition: "transform 0.2s ease, box-shadow 0.3s ease",
  };

  const dropdownStyle = {
    position: "absolute",
    top: "100%",
    right: "0",
    marginTop: "0.5rem",
    backgroundColor: "white",
    border: "1px solid #e5e7eb",
    borderRadius: "0.5rem",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    minWidth: "160px",
    zIndex: 1100,
  };

  const dropdownItemStyle = {
    display: "block",
    width: "100%",
    textAlign: "left",
    padding: "0.75rem 1rem",
    color: "#374151",
    textDecoration: "none",
    border: "none",
    background: "none",
    cursor: "pointer",
    fontSize: "0.875rem",
    transition: "background-color 0.2s ease",
  };

  return (
    <nav style={navStyle}>
      <div style={logoStyle}>
        <i className="fas fa-shield-alt"></i>
        SafeSphere
      </div>

      <div style={navLinksStyle}>
        {[ 
          { to: "/", label: "Home" },
          { to: "/about", label: "About" },
          { to: "/services", label: "Services" },
          { to: "/contact", label: "Contact" },
          { to: "/reports", label: "Reports" },
          { to: "/volunteer-dashboard", label: "Volunteers" },
        ].map((item) => (
          <Link
            key={item.to}
            to={item.to}
            style={linkStyle}
            onMouseEnter={(e) => {
              e.target.style.color = "#67e8f9";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "#f1f5f9";
              e.target.style.transform = "translateY(0)";
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Avatar or Login button */}
      {user ? (
        <div className="avatar-container relative">
          <div
            style={avatarStyle}
            onClick={handleAvatarClick}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.1)";
              e.target.style.boxShadow = "0 0 15px rgba(56, 189, 248, 0.7)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 0 12px rgba(56, 189, 248, 0.4)";
            }}
            title="View Profile"
          >
            {/* ✅ FIXED: This line now properly gets the user initial */}
            {getUserInitial(user)}
          </div>

          {/* Dropdown */}
          {showDropdown && (
            <div style={dropdownStyle}>
              <button
                onClick={handleProfile}
                style={dropdownItemStyle}
                onMouseEnter={(e) => e.target.style.backgroundColor = "#f3f4f6"}
                onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
              >
                Profile
              </button>
              <button
                onClick={handleLogout}
                style={dropdownItemStyle}
                onMouseEnter={(e) => e.target.style.backgroundColor = "#f3f4f6"}
                onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <Link
          to="/volunteer-login"
          className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 px-6 rounded-full font-semibold shadow-md hover:shadow-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-200"
        >
          Log In
        </Link>
      )}
    </nav>
  );
}