import React from "react";
import "./about.css";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img
              src="https://img.freepik.com/free-photo/image-amazed-happy-man-reacting-special-offer-internet-looking-laptop-excited-standing-against-blue-background_1258-65513.jpg"
              alt="About Image"
            />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <EmojiEventsOutlinedIcon className="about_icon" />
              <h5>Experience</h5>
              <small>3+ Years Working </small>
            </article>
            <article className="about_card">
              <GroupOutlinedIcon className="about_icon" />
              <h5>Clients</h5>
              <small>5+ Worldwide</small>
            </article>
            <article className="about_card">
              <FolderCopyOutlinedIcon className="about_icon" />
              <h5>Projects</h5>
              <small>10+ Completed </small>
            </article>
          </div>
          <p>
            {" "}
            Welcome to my portfolio! I am a motivated web developer with
            3 years of professional experience in crafting dynamic and
            responsive web applications. My expertise lies in React.js, Redux,
            Next.js, TypeScript, HTML, CSS, Java, Spring Boot and MySQL.
          </p>
          <a href="#contact" className="btn btn-primary">
            {" "}
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
