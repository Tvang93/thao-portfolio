"use client";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const IconLinksComponent = () => {
  return (
    <div className="flex gap-10">
      <div>
        <FontAwesomeIcon
          icon={faLinkedin}
          size="2x"
          className="hover:cursor-pointer"
          onClick={() =>
            window.open("https://www.linkedin.com/in/thao-vang-dev/")
          }
        />
      </div>
      <div>
        <FontAwesomeIcon
          icon={faGithub}
          size="2x"
          className="hover:cursor-pointer"
          onClick={() => window.open("https://github.com/Tvang93")}
        />
      </div>
      <div>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faFile}
            size="2x"
            className="hover:cursor-pointer"
          ></FontAwesomeIcon>
        </a>
      </div>
    </div>
  );
};

export default IconLinksComponent;
