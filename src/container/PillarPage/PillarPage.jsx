import React from "react";
import "./PillarPage.css"

import Supervise from "../../asset/SuperviseImgSample.png";
import Unsuperevise from "../../asset/UnsuperviseImgSample.png";
import LearningModel from "../../asset/LearningmodelSample.png";

const PillarPage = () => {
  return (
    <div className="PillarPage box__container flex__center">
      <h1 className="heroHeading1">PILLAR PAGE</h1>
      
      <div className="pillar-container">
        <div className="pillar-info">
          <img src={Supervise} alt="" width={200} height={200} />
          <h2 className="heroP">Best Supervised Learning Model</h2>
          <p>Awarded to the most accurate and well-optimized model trained with labeled data, excelling in predictions and classification tasks</p>
        </div>


        <div className="pillar-info">
          <img src={Unsuperevise} alt="" width={200} height={200}/>
          <h2 className="heroP">Best Unsupervised Learning Model</h2>
          <p>Recognizes the best model that uncovers hidden patterns, clusters, or structures in unlabeled data, demonstrating strong exploratory analysis.</p>
        </div>

        <div className="pillar-info">
          <img src={LearningModel} alt="" width={200} height={200} />
          <h2 className="heroP">Best Computer Vision Model</h2>
          <p>Given to the most innovative and effective model for analyzing and interpreting images or videos, excelling in tasks like object detection, segmentation, and recognition.</p>
        </div>


      </div>
    </div>
  );
};

export default PillarPage;