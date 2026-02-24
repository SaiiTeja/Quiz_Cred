import { Link } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode }) => {
  const theme = {
    background: darkMode ? "#0a0a0f" : "#ffffff",

    text: darkMode ? "#ffffff" : "#262626",

    primary: darkMode ? "linear-gradient(90deg, #2563eb, #1e3a8a)" : "#0095F6",

    border: darkMode ? "1px solid #1f2937" : "1px solid #dbdbdb",
  };

  return (
    <nav
      style={{
        width: "100%",
        background: theme.background,
        borderBottom: theme.border,
        position: "sticky",
        top: 0,
        zIndex: 1000,
        transition: "0.3s",
      }}
    >
      <div style={styles.container}>
        {/* LOGO */}
        <div style={styles.brand}>
          <img
            src="/images/logo.jpeg"
            alt="Quiz Cred Logo"
            style={styles.logoImg}
          />
          <h3 style={{ ...styles.logoText, color: theme.text }}>QuizCred</h3>
        </div>

        {/* NAV LINKS */}
        <div style={styles.links}>
          {[
            { label: "Home", path: "/" },
            { label: "Quiz", path: "/quiz" },
            { label: "Certifications", path: "/certifications" },
            { label: "Partners", path: "/partners" },
            { label: "Contact", path: "/contact" },
            { label: "Dashboard", path: "/dashboard" },
            { label: "About", path: "/about" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              style={{
                ...styles.link,
                color: darkMode ? theme.text : "#0095F6",
                fontWeight: darkMode ? "500" : "600",
              }}
            >
              {item.label}
            </Link>
          ))}

          {/* LOGIN BUTTON */}
          <Link
            to="/login"
            style={{
              marginLeft: "20px",
              padding: "8px 20px",
              borderRadius: "25px",
              textDecoration: "none",
              fontWeight: "600",
              background: theme.primary,
              color: "#fff",
              boxShadow: darkMode
                ? "0 4px 15px rgba(0,0,0,0.4)"
                : "0 4px 14px rgba(0,149,246,0.3)",
              transition: "0.3s",
            }}
          >
            Login
          </Link>

          {/* DARK MODE BUTTON */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              marginLeft: "15px",
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              border: darkMode ? "none" : "1px solid #dbdbdb",
              cursor: "pointer",
              background: darkMode ? "#fff" : "#f5f5f5",
              color: darkMode ? "#000" : "#262626",
              transition: "0.3s",
            }}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 20px",
    flexWrap: "wrap",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  logoImg: {
    height: "42px",
    width: "42px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  logoText: {
    margin: 0,
    fontSize: "20px",
    fontWeight: "700",
  },
  links: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
    flexWrap: "wrap",
  },
  link: {
    textDecoration: "none",
    transition: "0.2s",
  },
};

export default Navbar;
