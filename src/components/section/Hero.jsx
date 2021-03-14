import React from "react";
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="hero" className="all-center text-white">
      <div className="container">
        <div className="caption text-white" data-aos="fade-up">
          <div className="row">
            <div className="col-md-8 text-sm-left text-center">
              <h1 className="caption-title text-white mb-3">React Developer</h1>
              <p className="caption-subtitle mb-4">
                I work at least 90 hours a week, and I'm willing to learn
                anything! I'm also very interested in blockchain!
              </p>
              <a
                className="btn btn-primary btn-lg cta overflow-hidden position-relative"
                href="#project"
              >
                <span className="cta-animation-dot d-block position-absolute bg-white"></span>
                <span className="cta-animation-dot d-block position-absolute bg-white"></span>
                <span className="cta-animation-dot d-block position-absolute bg-white"></span>
                <span className="cta-animation-dot d-block position-absolute bg-white"></span>
                See Projects
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="social-links all-center position-absolute">
        <a
          href="https://github.com/yewyewXD"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
          className="social-icon text-white"
        >
          <VscGithubInverted className="mr-3" />
        </a>

        <a
          href="https://www.linkedin.com/in/yewyewxd/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="social-icon text-white"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}
