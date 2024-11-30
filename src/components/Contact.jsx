import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import lt from "./data/Leetcode.json"

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://www.instagram.com/nehaal_n_damor/" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a>
          <a href="https://www.facebook.com/nehal.damor.963/" target="_blank" className="items">
            <CiFacebook className="icons" />
          </a>
          <a href="https://www.linkedin.com/in/nehal-damor-81b1862aa/" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
          <a href="https://leetcode.com/u/Nehal_Damor/" target="_blank" className="items">
            <img src={`./dist/assets/${lt.imgSrc}`} alt="" className="icons-img"/>
          </a>
         
          <a
            href="mailto:nehaldamor715@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
