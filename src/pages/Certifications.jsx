import React from "react";
import CustomCard from "../components/CustomCard";
import "../styles/Certifications.css"

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
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 section-title">Our Certifications</h2>
        <div className="row g-4">
          {certifications.map((cert) => (
            <div className="col-12 col-md-4" key={cert.id}>
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

export default Certifications;
