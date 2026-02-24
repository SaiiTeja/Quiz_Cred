import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import darkThemeImage from "../assets/theme.png";
import lightThemeImage from "../assets/whitetheme.png";

const Login = ({ darkMode }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please fill all fields");
      return;
    }

    alert("Login Successful 🚀");
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
      {/* Background */}
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

      {/* Overlay */}
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
          {/* LEFT */}
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
            <h1 style={{ marginBottom: "20px" }}>Welcome to QuizCred</h1>
            <p style={{ color: theme.subText }}>
              Test your knowledge, earn certifications, and track your progress
              with interactive quizzes designed to boost your skills and career.
            </p>
          </div>

          {/* RIGHT */}
          <div
            style={{
              flex: 1,
              padding: "60px",
              color: theme.text,
            }}
          >
            <h3 style={{ marginBottom: "30px" }}>USER LOGIN</h3>

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                style={inputStyle(darkMode, theme.text)}
              />

              <div style={{ position: "relative" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  style={inputStyle(darkMode, theme.text)}
                />

                <span
                  style={{
                    position: "absolute",
                    right: "15px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    fontSize: "12px",
                    fontWeight: "600",
                  }}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </span>
              </div>

              {/* 🔥 RESTORED SECTION */}
              <div
                style={{
                  margin: "15px 0",
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "14px",
                }}
              >
                <label>
                  <input
                    type="checkbox"
                    name="remember"
                    checked={formData.remember}
                    onChange={handleChange}
                  />{" "}
                  Remember
                </label>

                <span
                  style={{
                    cursor: "pointer",
                    color: darkMode ? "#9ca3af" : "#0095F6",
                    fontWeight: "600",
                  }}
                  onClick={() => navigate("/forgot-password")}
                >
                  Forgot password?
                </span>
              </div>

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
                }}
              >
                LOGIN
              </button>
            </form>

            <p style={{ marginTop: "20px" }}>
              Don’t have an account?{" "}
              <span
                style={{
                  cursor: "pointer",
                  color: darkMode ? "#9ca3af" : "#0095F6",
                  fontWeight: "600",
                }}
                onClick={() => navigate("/signup")}
              >
                Signup
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

export default Login;
