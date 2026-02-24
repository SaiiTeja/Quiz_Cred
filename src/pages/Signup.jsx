import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import darkThemeImage from "../assets/theme.png";
import lightThemeImage from "../assets/whitetheme.png"; // 👈 added

const Signup = ({ darkMode }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match ❌");
      return;
    }

    alert("Signup Successful 🎉");
    navigate("/login");
  };

  const theme = {
    text: darkMode ? "#ffffff" : "#111827",
    subText: darkMode ? "#9ca3af" : "#374151",
    primary: darkMode ? "linear-gradient(90deg, #2563eb, #1e3a8a)" : "#0095F6",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        fontFamily: "Inter, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* 🔥 Background for BOTH themes */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${
            darkMode ? darkThemeImage : lightThemeImage
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          filter: darkMode ? "none" : "blur(1px) brightness(1.05)",
          transform: "scale(1.02)",
          zIndex: 0,
        }}
      />

      {/* 🔥 Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: darkMode ? "rgba(0,0,0,0.65)" : "rgba(255,255,255,0.6)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "900px",
            display: "flex",
            background: darkMode
              ? "rgba(17,24,39,0.85)"
              : "rgba(255,255,255,0.95)",
            backdropFilter: "blur(10px)",
            borderRadius: "20px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            overflow: "hidden",
          }}
        >
          {/* LEFT SIDE */}
          <div
            style={{
              flex: 1,
              padding: "60px",
              background: darkMode
                ? "rgba(255,255,255,0.05)"
                : "rgba(255,255,255,0.7)",
              color: theme.text,
            }}
          >
            <h1 style={{ marginBottom: "20px" }}>Create Your Account</h1>
            <p style={{ color: theme.subText }}>
              Join our platform and start your journey today. Improve your
              skills and grow with us.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div
            style={{
              flex: 1,
              padding: "60px",
              color: theme.text,
            }}
          >
            <h3 style={{ marginBottom: "30px" }}>SIGN UP</h3>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                onChange={handleChange}
                style={inputStyle(darkMode, theme.text)}
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={handleChange}
                style={inputStyle(darkMode, theme.text)}
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                onChange={handleChange}
                style={inputStyle(darkMode, theme.text)}
              />

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                required
                onChange={handleChange}
                style={inputStyle(darkMode, theme.text)}
              />

              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "25px",
                  border: "none",
                  fontWeight: "600",
                  cursor: "pointer",
                  background: theme.primary,
                  color: "#fff",
                  marginTop: "15px",
                  boxShadow: darkMode
                    ? "0 10px 30px rgba(0,0,0,0.4)"
                    : "0 6px 20px rgba(0,149,246,0.35)",
                }}
              >
                Register
              </button>
            </form>

            <p style={{ marginTop: "20px" }}>
              Already have an account?{" "}
              <span
                style={{
                  cursor: "pointer",
                  color: darkMode ? "#9ca3af" : "#0095F6",
                  fontWeight: "600",
                }}
                onClick={() => navigate("/login")}
              >
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const inputStyle = (darkMode, textColor) => ({
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: darkMode ? "1px solid rgba(255,255,255,0.1)" : "1px solid #e5e7eb",
  background: darkMode ? "rgba(255,255,255,0.05)" : "#ffffff",
  color: textColor,
});

export default Signup;
