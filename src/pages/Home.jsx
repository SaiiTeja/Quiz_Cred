import { useState } from "react";
import { useNavigate } from "react-router-dom";
import darkThemeImage from "../assets/theme.png";
import lightThemeImage from "../assets/whitetheme.png";

function Home({ darkMode }) {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  const theme = {
    text: darkMode ? "#ffffff" : "#111827",
    subText: darkMode ? "#9ca3af" : "#374151",
    footerText: darkMode ? "#6b7280" : "#4b5563",
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
      {/* Background Image */}
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
          color: theme.text,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        {/* HERO SECTION */}
        <div style={{ textAlign: "center", padding: "120px 20px" }}>
          <h1 style={{ fontSize: "70px", marginBottom: "20px" }}>QuizCred</h1>

          <h2 style={{ fontSize: "32px", marginBottom: "15px" }}>
            Test Your Knowledge. Improve Every Day.
          </h2>

          <p style={{ color: theme.subText, marginBottom: "30px" }}>
            Practice quizzes, challenge yourself, and grow your skills.
          </p>

          <button
            onClick={() => navigate("/quiz")}
            style={{
              padding: "14px 40px",
              borderRadius: "30px",
              border: "none",
              fontWeight: "600",
              cursor: "pointer",
              background: theme.primary,
              color: "#fff",
              boxShadow: darkMode
                ? "0 10px 30px rgba(0,0,0,0.4)"
                : "0 6px 20px rgba(0,149,246,0.35)",
              transition: "0.3s",
            }}
          >
            Start Quiz
          </button>

          <p style={{ marginTop: "20px", color: theme.subText }}>
            Trusted by 10,000+ learners worldwide 🌍
          </p>
        </div>

        {/* FEATURES */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            padding: "40px 20px",
            flexWrap: "wrap",
          }}
        >
          {[
            {
              title: "📘 Practice",
              text: "Solve daily quizzes and improve concepts.",
            },
            { title: "🏆 Compete", text: "Challenge friends and rank higher." },
            { title: "🚀 Learn", text: "Track your progress and level up." },
          ].map((item, i) => {
            const isHovered = hoveredCard === i;

            return (
              <div
                key={i}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: darkMode
                    ? "rgba(17,24,39,0.75)"
                    : "rgba(255,255,255,0.9)",
                  backdropFilter: "blur(10px)",
                  border: darkMode
                    ? "1px solid rgba(255,255,255,0.1)"
                    : "1px solid rgba(0,0,0,0.05)",
                  padding: "30px",
                  borderRadius: "20px",
                  width: "260px",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  transform: isHovered ? "scale(1.05)" : "scale(1)",
                  boxShadow: isHovered
                    ? "0 15px 30px rgba(0,0,0,0.1)"
                    : "0 4px 10px rgba(0,0,0,0.05)",
                  cursor: "pointer",
                }}
              >
                <h3 style={{ marginBottom: "10px" }}>{item.title}</h3>
                <p style={{ color: theme.subText }}>{item.text}</p>
              </div>
            );
          })}
        </div>

        {/* FOOTER */}
        <footer
          style={{
            marginTop: "auto",
            padding: "60px 40px 30px",
            borderTop: darkMode
              ? "1px solid rgba(255,255,255,0.1)"
              : "1px solid rgba(0,0,0,0.05)",
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
            <div style={{ maxWidth: "300px" }}>
              <h3 style={{ marginBottom: "15px" }}>QuizCred</h3>
              <p style={{ color: theme.subText }}>
                Empowering learners to grow their skills through smart quizzes
                and competitive challenges.
              </p>
            </div>

            <div>
              <h4 style={{ marginBottom: "15px" }}>Quick Links</h4>
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Contact", path: "/contact" },
                { label: "Dashboard", path: "/dashboard" },
              ].map((item, i) => (
                <p
                  key={i}
                  onClick={() => navigate(item.path)}
                  style={{
                    color: darkMode ? theme.footerText : "#0095F6",
                    cursor: "pointer",
                    marginBottom: "8px",
                    fontWeight: "500",
                  }}
                >
                  {item.label}
                </p>
              ))}
            </div>

            <div>
              <h4 style={{ marginBottom: "15px" }}>Connect</h4>
              {[
                {
                  label: "📸 Instagram",
                  url: "https://www.instagram.com/quiz.cred/",
                },
                { label: "💼 LinkedIn", url: "https://linkedin.com" },
                { label: "🐦 Twitter", url: "https://twitter.com" },
                { label: "📧 Email", url: "mailto:your@email.com" },
              ].map((item, i) => (
                <p
                  key={i}
                  onClick={() => window.open(item.url, "_blank")}
                  style={{
                    color: darkMode ? theme.footerText : "#0095F6",
                    cursor: "pointer",
                    marginBottom: "8px",
                    fontWeight: "500",
                  }}
                >
                  {item.label}
                </p>
              ))}
            </div>
          </div>

          <div
            style={{
              textAlign: "center",
              paddingTop: "20px",
              borderTop: darkMode
                ? "1px solid rgba(255,255,255,0.1)"
                : "1px solid rgba(0,0,0,0.05)",
              color: theme.footerText,
              fontSize: "14px",
            }}
          >
            © 2026 QuizCred. All Rights Reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;
