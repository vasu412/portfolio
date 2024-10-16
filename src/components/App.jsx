import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import "../css/index.css";
import animation, { handleSectionChange } from "./animation";
import Socials from "./socials";
import Project from "./project";
import Skills from "./skills";
import { Element, Link } from "react-scroll";
import Contact from "./contact";

const Parallax2 = () => {
  const [header, setHeader] = useState(false);
  const [skill, setSkill] = useState(false);
  const [project, setProject] = useState(false);
  const [social, setSocial] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      ".hero-text",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 3, ease: "power3.out", delay: 0.6 }
    );
  }, []);

  useEffect(() => {
    animation();
  }, [skill, project, social]);

  useEffect(() => {
    if (header) {
      gsap.fromTo(
        ".header-content",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.2 }
      );
    }
  }, [header]);

  return (
    <>
      {header && (
        <div className="header">
          <i
            className="material-icons menu close"
            onClick={() => setHeader(false)}>
            close
          </i>
          <div className="header-content">
            <Link to="hero" smooth={true} duration={500}>
              <span>HOME</span>
            </Link>
            <Link to="skills" smooth={true} duration={500}>
              <span>SKILLS</span>
            </Link>
            <Link to="projects" smooth={true} duration={500}>
              <span>PROJECTS</span>
            </Link>
            <Link to="socials" smooth={true} duration={500}>
              <span>SOCIALS</span>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <span>CONTACT</span>
            </Link>
          </div>
        </div>
      )}
      <i
        className="material-icons menu"
        onClick={() => setHeader(true)}
        style={{ display: `${!header ? "block" : "none"}` }}>
        menu
      </i>

      <Element name="hero">
        <section>
          <div id="hero" className="bg">
            <video autoPlay muted loop id="heroVideo">
              <source
                src="./5495781-uhd_2560_1080_30fps.mp4"
                type="video/mp4"
              />
            </video>
            <div className="hero-content">
              <h1 className="hero-text title">VASU SINGLA</h1>
              <h2 className="hero-text subtitle">A FULL STACK WEB DEVELOPER</h2>
            </div>
          </div>
          <Link to="skill" smooth={true} duration={500}>
            <i
              className="hero-text material-icons"
              style={{
                position: "absolute",
                zIndex: "999",
                top: "520px",
                left: "700px",
              }}>
              keyboard_arrow_down
            </i>
          </Link>
        </section>
      </Element>

      <Element name="skill">
        <section>
          <div className="bg" id="skills"></div>
          <div className="other-content">
            <h1 className="hero-text title">SKILLS</h1>
            <Link to="skill-section" smooth={true} duration={500}>
              <i
                className="hero-text material-icons"
                style={{ fontSize: "30px" }}
                onClick={() =>
                  handleSectionChange(
                    setSkill,
                    "skill-section",
                    true,
                    isTransitioning,
                    setIsTransitioning
                  )
                }>
                keyboard_arrow_down
              </i>
            </Link>
          </div>
        </section>
      </Element>

      <Element name="skill-section" id="skill-section">
        {skill && (
          <section>
            <Skills
              setSkill={setSkill}
              isTransitioning={isTransitioning}
              setIsTransitioning={setIsTransitioning}
              skill={skill}
            />
          </section>
        )}
      </Element>

      <Element name="projects">
        <section>
          <div className="bg" id="projects"></div>
          <div className="other-content">
            <h1 className="hero-text title">PROJECTS</h1>
            <Link to="project-section" smooth={true} duration={500}>
              <i
                className="hero-text material-icons"
                style={{ fontSize: "30px" }}
                onClick={() =>
                  handleSectionChange(
                    setProject,
                    "project-section",
                    true,
                    isTransitioning,
                    setIsTransitioning
                  )
                }>
                keyboard_arrow_down
              </i>
            </Link>
          </div>
        </section>
      </Element>

      <Element name="project-section" id="project-section">
        {project && (
          <section>
            <Project
              setProject={setProject}
              isTransitioning={isTransitioning}
              setIsTransitioning={setIsTransitioning}
            />
          </section>
        )}
      </Element>

      <Element name="socials">
        <section>
          <div className="bg" id="socials"></div>
          <div className="other-content">
            <h1 className="hero-text title">SOCIALS</h1>
            <Link to="social-section" smooth={true} duration={500}>
              <i
                className="hero-text material-icons"
                style={{ fontSize: "30px" }}
                onClick={() =>
                  handleSectionChange(
                    setSocial,
                    "social-section",
                    true,
                    isTransitioning,
                    setIsTransitioning
                  )
                }>
                keyboard_arrow_down
              </i>
            </Link>
          </div>
        </section>
      </Element>

      <Element name="social-section" id="social-section">
        {social && (
          <section>
            <Socials
              setSocial={setSocial}
              isTransitioning={isTransitioning}
              setIsTransitioning={setIsTransitioning}
            />
          </section>
        )}
      </Element>

      <Element name="contact">
        <section>
          <Contact />
        </section>
      </Element>

      <footer>
        <p>
          &copy; 2024 Vasu Singla. All rights reserved. | Designed and built by
          Vasu Singla.
        </p>
      </footer>
    </>
  );
};

export default Parallax2;
