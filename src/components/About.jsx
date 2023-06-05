import React from "react";
import {
  FacebookOutlined,
  GithubOutlined,
  GoogleOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

import img2 from "../images/img2.jpg";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-container">
          <div className="about-left">
            <img src={img2} alt="img2" />
          </div>

          <div className="about-right">
            <h3>About me</h3>

            <table cellSpacing={20}>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>:</td>
                  <td>Deepak Kumar Singh</td>
                </tr>
                <tr>
                  <td>Date of Birth</td>
                  <td>:</td>
                  <td> July 16, 2000</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>:</td>
                  <td>dks986786@gmail.com</td>
                </tr>
                <tr>
                  <td>Phone No</td>
                  <td>:</td>
                  <td>+91 8210941681</td>
                </tr>
              </tbody>
            </table>

            <hr
              style={{
                width: "80%",
                color: "white",
                marginTop: "20px",
              }}
            />
            <div className="about-icons">
              <GoogleOutlined
                style={{
                  fontSize: 32,
                  color: "var(--bg-green)",
                }}
              />
              <GithubOutlined
                style={{
                  fontSize: 32,
                  color: "var(--bg-green)",
                }}
              />
              <FacebookOutlined
                style={{
                  fontSize: 32,
                  color: "var(--bg-green)",
                }}
              />
              <InstagramOutlined
                style={{
                  fontSize: 32,
                  color: "var(--bg-green)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
