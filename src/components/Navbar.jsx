import { Link } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode }) => {
  const theme = {
    background: darkMode ? "#0a0a0f" : "#ffffff",
    text: darkMode ? "#ffffff" : "#111827",
    primary: darkMode ? "#00ffff" : "#16a34a",
    border: darkMode ? "1px solid #1f2937" : "1px solid #e5e7eb",
  };

  return (
    <nav
      style={{
        width: "100%",
        backgroundColor: theme.background,
        position: "sticky",
        top: 0,
        zIndex: 1000,
        borderBottom: theme.border,
        backdropFilter: "blur(8px)",
        transition: "0.3s",
      }}
    >
      <div style={styles.container}>
        {/* Logo + Name */}
        <div style={styles.brand}>
          <img
            src="/images/logo.jpeg"
            alt="Quiz Cred Logo"
            style={styles.logoImg}
          />
          <h3 style={{ ...styles.logoText, color: theme.primary }}>QuizCred</h3>
        </div>

        {/* Links */}
        <div style={styles.links}>
          {[
            { name: "Home", path: "/" },
            { name: "Quiz", path: "/quiz" },
            { name: "Certifications", path: "/certifications" },
            { name: "Partners", path: "/partners" },
            { name: "Contact", path: "/contact" },
            { name: "Dashboard", path: "/dashboard" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              style={{
                ...styles.link,
                color: theme.text,
                fontWeight: item.name === "Quiz" ? "600" : "400",
              }}
              onMouseOver={(e) => (e.target.style.color = theme.primary)}
              onMouseOut={(e) => (e.target.style.color = theme.text)}
            >
              {item.name}
            </Link>
          ))}

          {/* Login Button */}
          <Link
            to="/login"
            style={{
              marginLeft: "20px",
              padding: "8px 18px",
              borderRadius: "20px",
              textDecoration: "none",
              fontWeight: "600",
              backgroundColor: theme.primary,
              color: darkMode ? "#000" : "#fff",
              transition: "0.3s",
            }}
          >
            Login
          </Link>

          {/* Emoji Dark/Light Toggle */}
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
  },

  link: {
    marginLeft: "20px",
    textDecoration: "none",
    fontSize: "15px",
    transition: "0.3s",
  },
};

export default Navbar;
