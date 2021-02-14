import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Project from "./components/section/Project";
import Skill from "./components/section/Skill";
import Testimonial from "./components/section/Testimonial";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <main>
        <Project />
        <Skill />
        <Testimonial />
      </main>
    </>
  );
}

export default App;
