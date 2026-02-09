import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <h3 style={styles.logo}>Quiz_Cred</h3>

        <div>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/certifications" style={styles.link}>Certifications</Link>
          <Link to="/partners" style={styles.link}>Partners</Link>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    width: "100%",
    backgroundColor: "#222",
    position: "fixed",     // stays on top
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
    padding: "15px 20px"
  },
  logo: {
    margin: 0,
    color: "#fff"
  },
  link: {
    marginLeft: "20px",
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px"
  }
};

export default Navbar;
