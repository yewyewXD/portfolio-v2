import React, { useMemo, Fragment } from "react";
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
  const projects = useMemo(() => {
    return [
      {
        id: "project-1",
        title: "Catto Joy",
        description:
          "This is an e-commerce website with a focus around cats. Credit card details for testing purpose is attached to the checkout form. User will also receive a cute auto-reply after submitting the contact form. Try it out!",
        icons: [
          <SiGatsby className="skill-icon mr-2 gatsby" />,
          <FaBootstrap className="skill-icon mr-2 bootstrap" />,
          <FaSass className="skill-icon mr-2 sass" />,
          <FaNodeJs className="skill-icon mr-2 node" />,
          <GrStripe className="skill-icon mr-2 stripe" />,
          <SiNetlify className="skill-icon mr-2 netlify" />,
        ],
        liveLink: "https://cattojoy.netlify.app/",
        repoLink: "https://github.com/yewyewXD/cattojoy",
        image: projectImg1,
        alt: "My Project Catto Joy",
      },

      {
        id: "project-2",
        title: "Realtime Weather",
        description:
          "   A weather app that allows user to get the weather and temperature of a specific place. It also shows user the searched place's nearby cities and their weather conditions.",
        icons: [
          <FaReact className="skill-icon mr-2 react" />,
          <FaBootstrap className="skill-icon mr-2 bootstrap" />,
          <FaSass className="skill-icon mr-2 sass" />,
        ],
        liveLink: "https://rtweather.netlify.app/",
        repoLink: "https://github.com/yewyewXD/React-Weather-App",
        image: projectImg2,
        alt: "My Project Realtime Weather",
        isReversed: true,
      },

      {
        id: "project-3",
        title: "Agape Cafe",
        description:
          "A static website made for a restaurant owner to help promote his business.",
        icons: [
          <FaHtml5 className="skill-icon mr-2 html" />,
          <FaBootstrap className="skill-icon mr-2 bootstrap" />,
          <FaSass className="skill-icon mr-2 sass" />,
          <SiJavascript className="skill-icon mr-2 js" />,
        ],
        liveLink: "https://www.agapefoodjunction.com/",
        repoLink: "https://github.com/yewyewXD/Agape-Cafe",
        image: projectImg3,
        alt: "My Project Agape Cafe",
      },
    ];
  }, []);

  return (
    <section id="project" className="py-5">
      <div className="projects">
        <div className="container my-sm-5 my-3">
          <h1 className="mb-sm-5 mb-3 text-sm-left text-center">
            My Latest Projects
          </h1>

          {projects.map((project) => (
            <div
              className={`row text-lg-left text-center my-lg-5 py-5 ${
                project.isReversed ? "flex-lg-row-reverse" : ""
              }`}
              key={project.id}
              data-aos={project.isReversed ? "fade-right" : "fade-left"}
            >
              <div className="col-lg-6">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-100 project-image"
                />
              </div>
              <div className="col-lg-6 all-center-column align-items-lg-start mt-lg-0 mt-4">
                <h2 className="mb-sm-4 mb-3 project-title">{project.title}</h2>
                <p className="mb-3">{project.description}</p>
                <div className="skill-used all-center">
                  {project.icons.map((icon, index) => (
                    <Fragment key={`${project.id}_icon-${index}`}>
                      {icon}
                    </Fragment>
                  ))}
                </div>
                <div className="buttons mt-4 all-center">
                  <a
                    className="btn btn-primary btn-md mt-2 mr-3"
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live
                  </a>

                  <a
                    className="btn btn-outline-secondary btn-md mt-2"
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code &amp; Docs
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
