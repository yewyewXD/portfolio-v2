import React from "react";
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";

export default function AppFooter() {
  return (
    <footer id="appFooter" className="py-3">
      <div className="container all-center justify-content-between">
        <div className="copyright text-white m-0 pr-2">
          <span className="footer-brand ">Yew Kang Wei</span> &copy; All Rights
          Reserved
        </div>

        <div className="social-links all-center">
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
      </div>
    </footer>
  );
}
