import React from "react";

import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div>
      <div className="container mx-auto text-center flex gap-5 justify-center items-center mt-5 text-white ">
        <a href="https://www.instagram.com/swag__55__/">
          <div className="fa-instagram icons text-2xl ">
            <FaInstagram />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/prabakaran-m-105289219/">
          <div className="fa-linkedin icons text-2xl ">
            <FaLinkedin />
          </div>
        </a>
        <a href="https://github.com/Prabakara-N">
          <div className="fa-github icons text-2xl ">
            <FaGithub />
          </div>
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
