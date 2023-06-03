import img1 from "../images/img1.png";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="home-div">
        <div className="left">
          <h2 className="intro">Hello , My name is</h2>
          <h1 className="name">Deepak Kr. Singh</h1>
          <div className="title">
            <div className="title-wrapper">
              <div className="title-item">Full Stack Web Developer</div>
            </div>
          </div>
          <div className="desc">
            A self-motivated IT professional with good knowledge and proficiency
            in creating high-quality, scalable, predictable, and
            high-performance web applications.
          </div>
        </div>

        <div className="right">
          <div className="i-bg"></div>
          <img src={img1} alt="image1" srcSet="" className="i-img" />
        </div>
      </div>
    </>
  );
};

export default Home;
