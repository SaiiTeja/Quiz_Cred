import React from "react";
import CustomCard from "../components/CustomCard";
import "../styles/Certifications.css";

const certifications = [
  {
    id: 1,
    title: "ISO 9001",
    image: "/certs/iso9001.png",
    description: "Quality Management System",
  },
  {
    id: 2,
    title: "ISO 27001",
    image: "/certs/iso27001.png",
    description: "Information Security Standard",
  },
  {
    id: 3,
    title: "Startup India",
    image: "/certs/startup-india.png",
    description: "Government Recognized Startup",
  },
];

const Certifications = () => {
  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Our Certifications</h2>

        <div style={gridStyle}>
          {certifications.map((cert) => (
            <div key={cert.id} style={cardWrapperStyle}>
              <CustomCard
                title={cert.title}
                image={cert.image}
                description={cert.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ------------------ Styles ------------------ */

const sectionStyle = {
  padding: "80px 20px",
};

const containerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
};

const titleStyle = {
  textAlign: "center",
  marginBottom: "50px",
  fontSize: "2rem",
  fontWeight: "700",
};

const gridStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "40px",
  flexWrap: "wrap",
};

const cardWrapperStyle = {
  width: "300px",
};

export default Certifications;
