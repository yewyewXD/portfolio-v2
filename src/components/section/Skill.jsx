import React, { useMemo } from "react";
import { BiCodeAlt, BiBookHeart } from "react-icons/bi";
import { CgDatabase } from "react-icons/cg";
import { VscTools } from "react-icons/vsc";
import { GrUserSettings } from "react-icons/gr";

export default function Skill() {
  const skillSections = useMemo(() => {
    return [
      {
        id: "skillSection-1",
        icon: <BiCodeAlt className="mr-2" />,
        heading: "Frontend",
        skillItems: [
          "HTML5",
          "CSS",
          "Sass",
          "Bootstrap",
          "JavaScript",
          "ReactJS",
          "NextJS",
          "GatsbyJS",
        ],
      },
      {
        id: "skillSection-2",
        icon: <CgDatabase className="mr-2" />,
        heading: "Backend",
        skillItems: ["NodeJS", "ExpressJS", "MongoDB"],
      },
      {
        id: "skillSection-3",
        icon: <VscTools className="mr-2" />,
        heading: "Dev Tools",
        skillItems: [
          "Git",
          "Postman",
          "Jira",
          "Stripe",
          "Contentful",
          "Netlify",
        ],
      },
      {
        id: "skillSection-4",
        icon: <GrUserSettings className="mr-2" />,
        heading: "Personality",
        skillItems: [
          "Super-Hardworking",
          "Patient",
          "Attentive",
          "Empathetic",
          "Optimistic",
        ],
      },

      {
        id: "skillSection-5",
        icon: <BiBookHeart className="mr-2" />,
        heading: "Interests",
        skillItems: [
          "Blockchain",
          "Digital Marketing",
          "Mobile Dev",
          "Fulllstack Dev",
        ],
      },
    ];
  }, []);

  return (
    <section id="skill" className="py-5 bg-light text-sm-left text-center">
      <div className="container my-sm-5 my-3">
        <h1 className="mb-5 ">My skills</h1>

        {skillSections.map((skillSection) => (
          <div className="skill mb-4" data-aos="fade-up" key={skillSection.id}>
            <h2 className="all-center justify-content-sm-start">
              {skillSection.icon} {skillSection.heading}
            </h2>
            <div className="skill-items justify-content-sm-start justify-content-center d-flex flex-wrap">
              {skillSection.skillItems.map((skillItem) => (
                <span
                  className="skill-item mr-sm-3 mx-sm-0 mx-2"
                  key={skillItem}
                >
                  {skillItem}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
