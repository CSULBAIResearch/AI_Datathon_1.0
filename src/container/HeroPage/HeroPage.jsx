import React from "react";
import "./HeroPage.css"

//image
import SharkImg from "../../asset/sharkSample.png"

const HeroPage = () => {
  return (
    <div className="HeroPage box__container flex__center" id="Home">
      <div className="content-container">
        <div className="content-wrapper">
            <h1 className="heroHeading1">
                CSULB DATATHON 1.0
            </h1>

            <h2>Saturday, March 8th</h2>
            <h2>Location: USU Beach Ballroom 251 ABC</h2>

            <p className="heroP">
            The AI Research club is hosting CSULB's First Datathon, AI X DATA, bringing together students to demonstrate their skills in the fields of Machine Learning and Data Science. AI X DATA is going to be an All Day event taking place on campus, open to any CSULB students interested! Sign Up Below!

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