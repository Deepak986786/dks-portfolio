import "./App.css";
import { React } from "react";
import Footer from "./components/Footer";
import { Anchor } from "antd";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Services from "./components/Services";

function App() {
  return (
    <>
    <div >
      <Anchor
      className="app-navbar"
        affix={true}
        direction="horizontal"
        items={[
          {
            key: "1",
            href: "#home",
            title: <p>Home</p>,
          },
          {
            key: "2",
            href: "#about",
            title: <p>About</p>,
          },
          {
            key: "3",
            href: "#skills",
            title: <p>Skills</p>,
          },
          {
            key: "6",
            href: "#services",
            title: <p>Services</p>,
          },
          {
            key: "4",
            href: "#projects",
            title: <p>Projects</p>,
          },
          {
            key: "5",
            href: "#contact",
            title: <p>Contact Me</p>,
          },
        ]}
      />
     </div>


      <div id="home">
        <Home />
      </div>

      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
