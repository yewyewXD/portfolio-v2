import React, { useState, useEffect } from "react";
import { VscMenu, VscChromeClose } from "react-icons/vsc";
import Scrollspy from "react-scrollspy";

export default function AppHeader() {
  const navLinks = [
    { text: "Home", path: "#hero" },
    { text: "Project", path: "#project" },
    { text: "Skill", path: "#skill" },
    { text: "Testimonial", path: "#testimonial" },
    { text: "Contact", path: "#contact" },
  ];
  const [navOpen, setNavOpen] = useState(false);
  const [navBg, setNavBg] = useState("light-nav");

  function toggleNavOpen() {
    setNavOpen((prevNavOpen) => !prevNavOpen);
  }

  useEffect(() => {
    const listener = document.addEventListener("scroll", () => {
      const navBgClass = window.scrollY < 100 ? "light-nav" : "dark-nav";
      setNavBg(navBgClass);
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [navBg]);

  return (
    <header id="#appHeader" className="fixed-top" style={{ width: "100vw" }}>
      <nav className={`navbar navbar-expand-lg p-0 ${navBg}`}>
        <div className="container">
          <a className="navbar-brand text-white" href="#hero">
            Yew Kang Wei
          </a>
          <span
            className="navbar-toggler-btn d-lg-none text-white"
            role="button"
            aria-label="Hamburger navbar toggle button"
            onClick={toggleNavOpen}
          >
            {navOpen ? <VscChromeClose /> : <VscMenu />}
          </span>
          <div className="collapse navbar-collapse show" id="hamburgerNavbar">
            <Scrollspy
              items={["hero", "project", "skill", "testimonial", "contact"]}
              currentClassName="active"
              offset={-55}
              className="navbar-nav ml-auto mt-2 mt-lg-0 d-lg-flex d-none"
            >
              {navLinks.map((navLink) => (
                <li className="nav-item" key={navLink.text}>
                  <a className="nav-link text-white" href={navLink.path}>
                    {navLink.text}
                  </a>
                </li>
              ))}
            </Scrollspy>

            <div
              className={`small-nav position-fixed overflow-hidden ${
                navOpen ? "nav-open" : ""
              }`}
              style={{ width: "100vw" }}
            >
              <Scrollspy
                items={["hero", "project", "skill", "testimonial", "contact"]}
                currentClassName="active"
                offset={-55}
                className="navbar-nav"
              >
                {navLinks.map((navLink) => (
                  <li className="nav-item" key={navLink.text}>
                    <a className="nav-link text-white" href={navLink.path}>
                      {navLink.text}
                    </a>
                  </li>
                ))}
              </Scrollspy>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
