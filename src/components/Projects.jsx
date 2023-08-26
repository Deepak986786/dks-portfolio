import React from "react";
import pimg1 from "../images/cpa.png";

const Projects = () => {
  return (
    <>
      <div className="projects">
         <p>Accomplisment</p>
        <h3>My Projects</h3>
        <hr style={{
          width:'90%',
          color:'#FFFFFF',
          marginTop:'30px',
          marginBottom:'30px'
        }}/>

        <div className="projects-container">

        <div className="project-card">
          <img src={pimg1} alt="project1" />
          <div className="project-details">
            <h3>CryptoPayment System</h3>
            <p>View Live Demo</p>
          </div>
        </div>
        </div>

      </div>
    </>
  );
};

export default Projects;
