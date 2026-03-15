import { useState } from "react";
import { useNavigate } from "react-router-dom";
import darkThemeImage from "../assets/theme.png";
import lightThemeImage from "../assets/whitetheme.png";
import "../styles/Home.css";
import Footer from "../components/Footer";
import useTheme from "../hooks/useTheme";

function Home({ darkMode }) {
  // const {theme} = useTheme();
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
          <h1 className="hero-title">
  Discover Your Real Skills Before the Industry Does
</h1>

<p className="hero-desc">
  Skill-based quizzes that help students analyze their strengths
  and weak areas.
</p>

<div className="hero-buttons">

  <button
    onClick={() => navigate("/quiz")}
    className="hero-btn primary-btn"
  >
    Take Free Skill Test
  </button>

  <button
    onClick={() => navigate("/about")}
    className="hero-btn primary-btn"
  >
    Explore Platform
  </button>

</div>

          <p style={{ marginTop: "20px", color: theme.subText }}>
            Trusted by 10,000+ learners worldwide 🌍
          </p>
        </div>

        {/* HOW QUIZCRED WORKS */}
<div className="how-section">

  <h2 className="how-title">
    How QuizCred Works
  </h2>

  <div className="how-container">
    {[
      { icon: "🧠", title: "Take a Skill Quiz", text: "Choose quizzes to test your knowledge." },
      { icon: "📊", title: "Get Performance Analysis", text: "See detailed insights of your skills." },
      { icon: "🎯", title: "Identify Weak Areas", text: "Understand what you need to improve." },
      { icon: "🏆", title: "Improve & Compete", text: "Practice more and compete with others." },
    ].map((step, i) => {
      const isHovered = hoveredCard === i + 10;

      return (
        <div
          key={i}
          className="how-card"
          onMouseEnter={() => setHoveredCard(i + 10)}
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
            width: "240px",
            textAlign: "center",
            transition: "all 0.3s ease",
            transform: isHovered ? "scale(1.05)" : "scale(1)",
            boxShadow: isHovered
              ? "0 15px 30px rgba(0,0,0,0.1)"
              : "0 4px 10px rgba(0,0,0,0.05)",
            cursor: "pointer",
          }}
        >
          <div className="how-icon">
            {step.icon}
          </div>

          <h3 style={{ marginBottom: "10px" }}>
            {step.title}
          </h3>

          <p style={{ color: theme.subText }}>
            {step.text}
          </p>
        </div>
      );
    })}
  </div>

</div>

        {/* FEATURES */}
        <div style={{ textAlign: "center" }}>
  <h2 className="how-title">
    Features
  </h2>
</div>
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

       
      </div>
    </div>
  );
}

export default Home;