import React from "react";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Portfolio
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonial">Testimonial</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.facebook.com/gangwar2944"  target="_blank"
         rel="Facebook profile noreferrer">
          <FacebookIcon />
        </a>
        <a href="https://www.instagram.com/vishal_gangwar001/"
         target="_blank"
         rel="Insta profile noreferrer">
          <InstagramIcon />
        </a>
        <a href="twitter.com">
          <TwitterIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/vishal-gangwar-a6aa5b186/"
          target="_blank"
          rel="linkedin profile noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>
      <div className="footer_copyright">
        <small> &copy; Vishal . All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
