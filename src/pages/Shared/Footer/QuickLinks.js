import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const QuickLinks = () => {
  return (
    <div>
      <h5 className="text-xl mb-1 border-indigo-800 border-b-2 inline">
        Quick Links
      </h5>
      <ul className="mt-2">
        <li>
          <Link to="/">FAQ</Link>
        </li>
        <li>
          <Link to="/">Terms & COnditions</Link>
        </li>
        <li>
          <Link to="/">Privacy Policy</Link>
        </li>
        <li>
          <Link to="/">About Us</Link>
        </li>
      </ul>
      <h6 className="text-xl mt-3">Socials</h6>
      <div className="w-20 mt-2 grid grid-cols-3 gap-4 ">
        <a
          href="https://www.facebook.com/asifiqbal.munna.5"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://github.com/asif-iqbal-munna"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.instagram.com/acf_iqbal_munna"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  );
};

export default QuickLinks;
