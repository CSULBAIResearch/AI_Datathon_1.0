import React from "react";
import "./ApplicationPage.css"

const ApplicationPage = () => {
  return (
    <div className="ApplicationPage box__container flex__center">
      <h1 className="heroHeading1">
                APPLY FOR DATATHON
            </h1>
      <div className="application-container-box">
        <div className="IntroApplication">
        Interested in showcasing your data skills? Apply now to participate in our Datathon! Solve real-world challenges, collaborate with a team, and compete for exciting prizes. Don't miss this opportunity—apply today!
        </div>
        
        <button className="application-btn" role="button">
          Apply
        </button>


      </div>

    </div>
  );
};

export default ApplicationPage;