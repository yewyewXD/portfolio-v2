import React from "react";
import { BiCodeAlt } from "react-icons/bi";
import { CgDatabase } from "react-icons/cg";
import { VscTools } from "react-icons/vsc";
import { GrUserSettings } from "react-icons/gr";

export default function Skill() {
  const frontendSkillItems = [
    "HTML5",
    "CSS",
    "Sass",
    "Bootstrap",
    "JavaScript",
    "ReactJS",
    "NextJS",
  ];
  const backendSkillItems = ["NodeJS", "ExpressJS", "MongoDB", "Stripe"];
  const devToolSkillItems = ["Chrome DevTools", "Postman", "Git Bash"];
  const personalitySkillItems = [
    "Hardworking",
    "Loyal",
    "Patient",
    "Empathetic",
    "Optimistic",
  ];

  return (
    <section id="skill" className="py-5 bg-light text-sm-left text-center">
      <div className="container my-sm-5 my-3">
        <h1 className="mb-5 ">My skills</h1>

        <div className="skill mb-4" data-aos="fade-up">
          <h2 className="all-center justify-content-sm-start">
            <BiCodeAlt className="mr-2" /> Frontend
            <span className="ml-2 d-sm-inline d-none">Development</span>
          </h2>
          <div className="skill-items justify-content-sm-start justify-content-center d-flex flex-wrap">
            {frontendSkillItems.map((skillItem) => (
              <span className="skill-item mr-sm-3 mx-sm-0 mx-2" key={skillItem}>
                {skillItem}
              </span>
            ))}
          </div>
        </div>

        <div className="skill mb-4" data-aos="fade-up">
          <h2 className="all-center justify-content-sm-start">
            <CgDatabase className="mr-2" /> Backend
            <span className="ml-2 d-sm-inline d-none">Development</span>
          </h2>
          <div className="skill-items justify-content-sm-start justify-content-center d-flex flex-wrap">
            {backendSkillItems.map((skillItem) => (
              <span className="skill-item mr-sm-3 mx-sm-0 mx-2" key={skillItem}>
                {skillItem}
              </span>
            ))}
          </div>
        </div>

        <div className="skill mb-4" data-aos="fade-up">
          <h2 className="all-center justify-content-sm-start">
            <VscTools className="mr-2" /> Dev
            <span className="d-sm-inline d-none mr-2">eloper</span> Tools
          </h2>
          <div className="skill-items justify-content-sm-start justify-content-center d-flex flex-wrap text-center">
            {devToolSkillItems.map((skillItem) => (
              <span className="skill-item mr-sm-3 mx-sm-0 mx-2" key={skillItem}>
                {skillItem}
              </span>
            ))}
          </div>
        </div>

        <div className="skill mb-4" data-aos="fade-up">
          <h2 className="all-center justify-content-sm-start">
            <GrUserSettings className="mr-2" /> Personality
          </h2>
          <div className="skill-items justify-content-sm-start justify-content-center d-flex flex-wrap text-center">
            {personalitySkillItems.map((skillItem) => (
              <span className="skill-item mr-sm-3 mx-sm-0 mx-2" key={skillItem}>
                {skillItem}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
