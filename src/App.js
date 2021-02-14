import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import AppHeader from "./components/AppHeader";
import Hero from "./components/section/Hero";
import Project from "./components/section/Project";
import Skill from "./components/section/Skill";
import Testimonial from "./components/section/Testimonial";
import Contact from "./components/section/Contact";
import AppFooter from "./components/AppFooter";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <AppHeader />
      <main>
        <Hero />
        <Project />
        <Skill />
        <Testimonial />
        <Contact />
      </main>
      <AppFooter />
    </>
  );
}

export default App;
