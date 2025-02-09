import React from "react";
import "./HeroPage.css"

//image
import SharkImg from "../../asset/sharkSample.png"

const HeroPage = () => {
  return (
    <div className="HeroPage box__container flex__center">
      <div className="content-container">
        <div className="content-wrapper">
            <h1 className="heroHeading1">
                CSULB DATATHON 1.0
            </h1>

            <p className="heroP">
            For the first time ever, CSULB is hosting its own Datathon, SharkHack, bringing together students to showcase their skills, collaborate, and innovate in the world of data science. SharkHack is an exciting competition where participants analyze real-world data, apply machine learning, and uncover insights to solve complex problems. 

            </p>
        </div>
        
      </div>

      <div className="image-container">
        <img src={SharkImg} alt="" />
      </div>

    </div>
  );
};

export default HeroPage;