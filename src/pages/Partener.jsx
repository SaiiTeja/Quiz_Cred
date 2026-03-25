import React from "react";
import CustomCard from "../components/CustomCard";
import "../styles/Partner.css";
import FacebookLogo from "../assets/facebook-logo.png";
import GoogleLogo from "../assets/google.png";
import MicrosoftLogo from "../assets/Microsoft-Logo.png";
import UnacedmyLogo from "../assets/unacedmylogo.jpeg";
import InstagramLogo from "../assets/instagram.png";
import UnstopLogo from "../assets/unstoplogo.png";
import Xlogo from "../assets/twitter.png";

const partners = [
  { id: 1, name: "Google", logo: GoogleLogo },
  { id: 2, name: "Microsoft", logo: MicrosoftLogo },
  { id: 3, name: "Facebook", logo: FacebookLogo },
  { id: 4, name: "Unacedmy", logo: UnacedmyLogo },
  { id: 5, name: "Instagram", logo: InstagramLogo },
  { id: 6, name: "Unstop", logo: UnstopLogo },
  { id: 7, name: "X", logo: Xlogo },
];

const Partners = () => {
  return (
    <section className="py-5 overflow-hidden min-h-[100vh]">
      <div className="container mx-auto my-32">
        <h2 className="text-center mb-6 section-title">Trusted By</h2>

        <div className="logo-carousel" style={{"--card-count":partners.length}}>
          <div className="logo-group">
            {partners.map((partner, index) => (
              <div className="logo" key={index}>
                <img src={partner.logo} alt={partner.name} />
                <div>{partner.name}</div>
              </div>
            ))}
          </div>
          {/* duplicate logo for infinite carousal */}
          <div className="logo-group" aria-hidden>
            {partners.map((partner, index) => (
              <div className="logo" key={index}>
               
                  <img
                    src={partner.logo}
                    alt={partner.name}
                
                  />
                  <div>{partner.name}</div>
           
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
