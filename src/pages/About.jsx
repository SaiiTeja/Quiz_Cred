import "../styles/About.css";

const About = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        <h1>About Us</h1>
        <p className="about-tagline">
          Empowering learning through interactive and intelligent quizzes.
        </p>

        <div className="about-cards">
          <div className="about-card">
            <h3>🎯 Our Mission</h3>
            <p>
              To make learning engaging, accessible, and skill-oriented for
              everyone.
            </p>
          </div>

          <div className="about-card">
            <h3>🚀 Our Vision</h3>
            <p>
              Building a trusted platform that blends education, technology,
              and innovation.
            </p>
          </div>

          <div className="about-card">
            <h3>💡 Why Choose Us</h3>
            <p>
              Modern UI, real-world quizzes, certifications, and a seamless
              user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
