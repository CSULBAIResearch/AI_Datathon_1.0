import React from "react";
import "./ContactPage.css"
import SharkImg from "../../asset/sharkSample.png"
import { FaInstagramSquare, FaDiscord, FaEnvelope  } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";


const ContactPage = () => {
  return (
    <div className="ContactPage box__container flex__center">
      <h1 className="heroHeading1">AI CLUB  at CSULB</h1>
      <div className="contact-container">
        <div className="contact-img-container">
          <img src={SharkImg} alt="" />
        </div>

        <div className="contact-info-container">
          <h2>Contact Information</h2>
          <div className="icon-container">
            <FaInstagramSquare size={70} className="icon"/>
            <FaDiscord size={70} className="icon"/>
            <FaEnvelope size={70} className="icon"/>
          </div>

          <button className="application-btn" role="button">
            VISIT OUR WEBSITE
          </button>
          
        </div>
      </div>

    </div>
  );
};

export default ContactPage;