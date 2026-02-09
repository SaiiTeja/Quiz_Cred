import React from "react";
import CustomCard from "../components/CustomCard";
import "../styles/Partner.css"
import FacebookLogo from "../assets/Facebook-logo.png"
import GoogleLogo from "../assets/google.png"
import MicrosoftLogo from "../assets/Microsoft-Logo.png"
import UnacedmyLogo from "../assets/unacedmylogo.jpeg"
import InstagramLogo from "../assets/instagram.png"
import UnstopLogo from "../assets/unstoplogo.png"
import Xlogo from "../assets/twitter.png"

const partners = [
  { id: 1, name: "Google", logo: GoogleLogo   },
  { id: 2, name: "Microsoft", logo: MicrosoftLogo },
  { id: 3, name: "Facebook", logo: FacebookLogo },
  { id: 4, name: "Unacedmy", logo: UnacedmyLogo },
  { id: 4, name: "Instagram", logo: InstagramLogo },
  { id: 4, name: "Unstop", logo: UnstopLogo },
  { id: 4, name: "X", logo: Xlogo },
];


const Partners = () => {
  return (
    <section className="py-5 overflow-hidden">
      <div className="container">
        <h2 className="text-center mb-5 section-title">Trusted By</h2>

        <div className="logo-slider">
          <div className="d-flex align-items-center logo-track">
            {[...partners, ...partners].map((partner, index) => (
              <div
                className="col-6 col-md-3 text-center px-4"
                key={index}
              >
                <CustomCard
                  image={partner.logo}
                  title={partner.name}
                  className="partner-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};



export default Partners;
