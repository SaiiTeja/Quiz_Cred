import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);

  const theme = {
    background: darkMode
      ? "radial-gradient(circle at 20% 30%, rgba(0,255,255,0.15), transparent 50%), #0a0a0f"
      : "#f8fafc",

    text: darkMode ? "white" : "#111827",

    primary: darkMode ? "#00ffff" : "#16a34a",

    card: darkMode ? "rgba(255,255,255,0.05)" : "#ffffff",

    subText: darkMode ? "#bbb" : "#4b5563",

    footer: darkMode ? "#666" : "#6b7280",

    border: darkMode ? "none" : "1px solid #e5e7eb",

    buttonShadow: darkMode
      ? "0 0 20px rgba(0,255,255,0.4)"
      : "0 8px 20px rgba(22,163,74,0.25)",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: theme.background,
        color: theme.text,
        fontFamily: "Inter, sans-serif",
        transition: "all 0.4s ease",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
        }}
      >
        <h2 style={{ color: theme.primary }}>QuizCred</h2>

        {/* Emoji Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            padding: "8px 14px",
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            backgroundColor: theme.primary,
            fontSize: "18px",
            transition: "0.3s",
          }}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </nav>

      {/* Hero Section */}
      <div style={{ textAlign: "center", padding: "120px 20px" }}>
        <h1 style={{ fontSize: "70px", color: theme.primary }}>QuizCred</h1>

        <h2 style={{ fontSize: "32px", marginBottom: "15px" }}>
          Test Your Knowledge. Improve Every Day.
        </h2>

        <p style={{ color: theme.subText, marginBottom: "30px" }}>
          Practice quizzes, challenge yourself, and grow your skills.
        </p>

        <button
          onClick={() => navigate("/quiz")}
          style={{
            padding: "14px 30px",
            background: theme.primary,
            border: "none",
            borderRadius: "30px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: theme.buttonShadow,
            transition: "0.3s",
          }}
        >
          Start Quiz
        </button>

        <p style={{ marginTop: "20px", color: theme.footer }}>
          Trusted by 10,000+ learners worldwide 🌍
        </p>
      </div>

      {/* Features Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          padding: "60px 20px",
          flexWrap: "wrap",
        }}
      >
        {[
          {
            title: "📘 Practice",
            text: "Solve daily quizzes and improve concepts.",
          },
          {
            title: "🏆 Compete",
            text: "Challenge friends and rank higher.",
          },
          {
            title: "🚀 Learn",
            text: "Track your progress and level up.",
          },
        ].map((item, i) => {
          const isHovered = hoveredCard === i;

          return (
            <div
              key={i}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: theme.card,
                border: theme.border,
                padding: "30px",
                borderRadius: "16px",
                width: "260px",
                textAlign: "center",
                transition: "all 0.4s ease",
                transform: isHovered ? "scale(1.08)" : "scale(1)",
                boxShadow: isHovered
                  ? darkMode
                    ? "0 0 25px rgba(0,255,255,0.4)"
                    : "0 10px 30px rgba(22,163,74,0.25)"
                  : "none",
                cursor: "pointer",
              }}
            >
              <h3 style={{ marginBottom: "10px" }}>{item.title}</h3>
              <p style={{ color: theme.subText }}>{item.text}</p>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <footer
        style={{
          marginTop: "80px",
          padding: "60px 40px 30px",
          borderTop: darkMode ? "1px solid #1f2937" : "1px solid #e5e7eb",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "40px",
            marginBottom: "40px",
          }}
        >
          {/* Brand Section */}
          <div style={{ maxWidth: "300px" }}>
            <h3 style={{ color: theme.primary, marginBottom: "15px" }}>
              QuizCred
            </h3>
            <p style={{ color: theme.subText }}>
              Empowering learners to grow their skills through smart quizzes and
              competitive challenges.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ marginBottom: "15px" }}>Quick Links</h4>

            {[
              { label: "Home", path: "/" },
              { label: "About", path: "/about" },
              { label: "Contact", path: "/contact" },
              { label: "Dashboard", path: "/dashboard" },
            ].map((item, index) => (
              <p
                key={index}
                onClick={() => navigate(item.path)}
                style={{
                  color: theme.subText,
                  cursor: "pointer",
                  marginBottom: "8px",
                  transition: "0.3s",
                }}
                onMouseOver={(e) => (e.target.style.color = theme.primary)}
                onMouseOut={(e) => (e.target.style.color = theme.subText)}
              >
                {item.label}
              </p>
            ))}
          </div>

          {/* Social Section */}
          <div>
            <h4 style={{ marginBottom: "15px" }}>Connect</h4>

            {[
              { label: "🌐 Website", url: "https://yourwebsite.com" },
              { label: "💼 LinkedIn", url: "https://linkedin.com" },
              {
                label: "📸 Instagram",
                url: "https://www.instagram.com/quiz.cred/",
              },
              { label: "🐦 Twitter", url: "https://twitter.com" },
              { label: "📧 Email", url: "mailto:your@email.com" },
            ].map((item, index) => (
              <p
                key={index}
                onClick={() => window.open(item.url, "_blank")}
                style={{
                  color: theme.subText,
                  cursor: "pointer",
                  marginBottom: "8px",
                  transition: "0.3s",
                }}
                onMouseOver={(e) => (e.target.style.color = theme.primary)}
                onMouseOut={(e) => (e.target.style.color = theme.subText)}
              >
                {item.label}
              </p>
            ))}
          </div>
        </div>

        {/* Bottom Line */}
        <div
          style={{
            textAlign: "center",
            paddingTop: "20px",
            borderTop: darkMode ? "1px solid #1f2937" : "1px solid #e5e7eb",
            color: theme.footer,
            fontSize: "14px",
          }}
        >
          © 2026 QuizCred. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default Home;
