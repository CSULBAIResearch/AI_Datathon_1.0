import React from "react";
import "./ApplicationPage.css"

const ApplicationPage = () => {
  return (
    <div className="ApplicationPage box__container flex__center" id="Application">
      <h1 className="heroHeading1">
                APPLY FOR DATATHON
            </h1>
      <div className="application-container-box">
        <div className="IntroApplication">
            <p>Interested in showcasing your data skills? Apply now to participate in our Datathon! Solve real-world challenges, collaborate with a team, and compete for exciting prizes. Don't miss this opportunity—apply today!</p>
            
            <p>Sign Up Form Closes: Sunday, February 23rd, 11:59pm</p>
            
            
        </div>
        
        <a className="application-btn" role="button"      
          href="https://forms.gle/iXQqkHXz2KBiG5WW9"
          target="_blank"
          rel="noopener noreferrer">
        
          Apply
      
        </a>


      </div>

    </div>
  );
};

export default ApplicationPage;