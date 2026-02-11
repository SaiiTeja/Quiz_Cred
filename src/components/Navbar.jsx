import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.container}>

        {/* Logo + Name */}
        <div style={styles.brand}>
          <img
            src="/images/logo.jpeg"
            alt="Quiz Cred Logo"
            style={styles.logoImg}
          />
          <h3 style={styles.logoText}>Quiz_Cred</h3>
        </div>

        {/* Links */}
        <div>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/certifications" style={styles.link}>Certifications</Link>
          <Link to="/partners" style={styles.link}>Partners</Link>
          <Link to="/about"style={styles.link}>About</Link>
          <Link to="/contact"style={styles.link}>Contact</Link>
          <Link to="/quiz"style={styles.link}>quiz</Link>

        </div>

      </div>
    </nav>
  );
};

const styles = {
  nav: {
    width: "100%",
    backgroundColor: "#222",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1000
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 20px"
  },

  /* 🔥 Brand section */
  brand: {
    display: "flex",
    alignItems: "center",
    gap: "10px"
  },

logoImg: {
  height: "42px",
  width: "42px",
  borderRadius: "50%",   // 👈 makes it circle
  objectFit: "cover",    // fills circle properly
  background: "transparent"
},


  logoText: {
    margin: 0,
    color: "#fff",
    fontSize: "20px",
    fontWeight: "600"
  },

  link: {
    marginLeft: "20px",
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px"
  }
};

export default Navbar;
