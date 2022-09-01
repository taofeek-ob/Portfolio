import React from "react";

import { FiLinkedin } from "react-icons/fi";
import { AiOutlineMedium } from "react-icons/ai";
import { BsGithub, BsTwitter } from "react-icons/bs";
const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://github.com/taofeek-ob" target="blank">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://twitter.com/taofeek_ob" target="blank">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://linkedin.com/in/taofeek-ob" target="blank">
          <FiLinkedin />
        </a>
      </div>
      <div>
        <a href="https://taofeek.medium.com" target="blank">
          <AiOutlineMedium />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
