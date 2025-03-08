import React from "react";
import "./ContactPage.css"
import SharkImg from "../../asset/shark.gif"
import { FaInstagramSquare, FaDiscord,FaLinkedin   } from "react-icons/fa";


const ContactPage = () => {
  return (
    <div className="ContactPage box__container flex__center" id="Contact">
      <h1 className="heroHeading1">AI CLUB  at CSULB</h1>
      <div className="contact-container">
        <div className="contact-img-container">
          <img src={SharkImg} alt="" />
        </div>

        <div className="contact-info-container">
          <h2>Contact Information</h2>
          <div className="icon-container">
            <a href="https://www.instagram.com/csulb_ai_research/" target="_blank" rel="noopener noreferrer"><FaInstagramSquare size={70} className="icon"/></a>
            
            <a href="https://discord.gg/ASa2pwpTcM" target="_blank" rel="noopener noreferrer"><FaDiscord size={70}  className="icon"/></a>
            
            <a href="https://www.linkedin.com/company/csulb-arc/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={70}  className="icon"/></a>
            
          </div>

            <a className="application-btn alink" role="button" href="https://csulbairesearch.github.io/AI_Research_Website/" target="_blank" rel="noopener noreferrer">
              VISIT OUR WEBSITE
            </a>
            {/* <p className="heroP">Email us: ai.researchcsulb@gmail.com</p> */}
        </div>
      </div>

    </div>
  );
};

export default ContactPage;