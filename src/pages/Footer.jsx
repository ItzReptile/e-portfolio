import React from "react";

import resume from "..//../src/assets/JoseH.pdf";
import "../styles.css";

const Footer = () => {
  return (
    <div className="footer__wrapper">
      
      <div className="footer__link--wrapper">
        <div>
          <a href="https://github.com/ItzReptile" target="_blank">
            Github
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/jose-hernandez-871b07285/"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
        <div>
          <a href="mailto:hernandezjos1121@gmail.com">Email</a>
        </div>
        <div>
          <a href={resume} target="_blank">
            Resume
          </a>
        </div>
      </div>
      <div>Copyright &copy; 2022 Jose Herandez</div>
    </div>
  );
};

export default Footer;
