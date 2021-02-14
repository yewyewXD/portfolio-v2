import React, { useEffect } from "react";
import Aos from "aos";
import Project from "./components/section/Project";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <main>
        <Project />
      </main>
    </>
  );
}

export default App;
