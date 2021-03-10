import React from "react";
import projectImg1 from "../../images/projectCattoJoy.webp";
import projectImg2 from "../../images/projectRtWeather.webp";
import projectImg3 from "../../images/projectAgapeCafe.webp";

import {
  FaReact,
  FaBootstrap,
  FaSass,
  FaHtml5,
  FaNodeJs,
} from "react-icons/fa";
import { SiGatsby, SiNetlify, SiJavascript } from "react-icons/si";
import { GrStripe } from "react-icons/gr";

export default function Project() {
  return (
    <section id="project" className="py-5">
      <div className="projects">
        <div className="container my-sm-5 my-3">
          <h1 className="mb-sm-5 mb-3 text-sm-left text-center">
            My Latest Projects
          </h1>

          <div
            className="row project-row text-lg-left text-center my-lg-5 py-5"
            data-aos="fade-left"
          >
            <div className="col-lg-6">
              <img
                src={projectImg1}
                alt="My Project Catto Joy"
                className="w-100 project-image"
              />
            </div>
            <div className="col-lg-6 all-center-column align-items-lg-start mt-lg-0 mt-4">
              <h2 className="mb-sm-4 mb-3 project-title">Catto Joy</h2>
              <p className="mb-3">
                This is an e-commerce website with a focus around cats. Credit
                card details for testing purpose are attached to the checkout
                form. User will also receive a cute auto-reply after submitting
                the contact form. Try it out!
              </p>
              <div className="skill-used all-center">
                <SiGatsby className="skill-icon mr-2 gatsby" />
                <FaBootstrap className="skill-icon mr-2 bootstrap" />
                <FaSass className="skill-icon mr-2 sass" />
                <FaNodeJs className="skill-icon mr-2 node" />
                <GrStripe className="skill-icon mr-2 stripe" />
                <SiNetlify className="skill-icon mr-2 netlify" />
              </div>
              <div className="buttons mt-4 all-center">
                <a
                  className="btn btn-primary btn-md mt-2 mr-3"
                  href="https://cattojoy.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Demo
                </a>
                <button
                  className="btn btn-outline-secondary btn-md mt-2"
                  disabled={true}
                >
                  Private
                </button>
              </div>
            </div>
          </div>

          <div
            className="row project-row text-lg-left text-center my-lg-5 py-5 flex-lg-row flex-column-reverse"
            data-aos="fade-right"
          >
            <div className="col-lg-6 all-center-column align-items-lg-start flex-column mt-lg-0 mt-4">
              <h2 className="mb-sm-4 mb-3 project-title">Realtime Weather</h2>
              <p className="mb-3">
                A weather app that allows user to get the weather and
                temperature of a specific place. It also shows user the searched
                place's nearby cities and their weather conditions.
              </p>
              <div className="skill-used all-center">
                <FaReact className="skill-icon mr-2 react" />
                <FaBootstrap className="skill-icon mr-2 bootstrap" />
                <FaSass className="skill-icon mr-2 sass" />
              </div>
              <div className="buttons mt-4 all-center">
                <a
                  className="btn btn-primary btn-md mt-2 mr-3"
                  href="https://rtweather.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live
                </a>
                <a
                  className="btn btn-outline-secondary btn-md mt-2"
                  href="https://github.com/yewyewXD/React-Weather-App"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code &amp; Docs
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src={projectImg2}
                alt="My Project Realtime Weather"
                className="w-100 project-image"
              />
            </div>
          </div>

          <div
            className="row project-row text-lg-left text-center my-lg-5 pt-5"
            data-aos="fade-left"
          >
            <div className="col-lg-6">
              <img
                src={projectImg3}
                alt="My Project Agape Cafe"
                className="w-100 project-image"
              />
            </div>
            <div className="col-lg-6 all-center-column align-items-lg-start mt-lg-0 mt-4">
              <h2 className="mb-sm-4 mb-3 project-title">Agape Cafe</h2>
              <p className="mb-3">
                A static website made for a restaurant owner to help promote his
                business.
              </p>
              <div className="skill-used all-center">
                <FaHtml5 className="skill-icon mr-2 html" />
                <FaBootstrap className="skill-icon mr-2 bootstrap" />
                <FaSass className="skill-icon mr-2 sass" />
                <SiJavascript className="skill-icon mr-2 js" />
              </div>

              <div className="buttons mt-4 all-center">
                <a
                  className="btn btn-primary btn-md mt-2 mr-3"
                  href="https://www.agapefoodjunction.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live
                </a>

                <a
                  className="btn btn-outline-secondary btn-md mt-2"
                  href="https://github.com/yewyewXD/Agape-Cafe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code &amp; Docs
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
