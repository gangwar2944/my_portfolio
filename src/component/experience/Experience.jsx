import React from "react";
import "./experience.css";
import VerifiedIcon from "@mui/icons-material/Verified";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <VerifiedIcon className="experience_detail-icon" />
              <div>
                <h4>React.js</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <VerifiedIcon className="experience_detail-icon" />
              <div>
                <h4>Redux</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <VerifiedIcon className="experience_detail-icon" />
              <div>
                <h4>Next.js</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <VerifiedIcon className="experience_detail-icon" />
              <div>
                <h4>TypeScript</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <VerifiedIcon className="experience_detail-icon" />
              <div>
                <h4>HTML5</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <VerifiedIcon className="experience_detail-icon" />
              <div>
                <h4>CSS3</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <VerifiedIcon className="experience_detail-icon" />
              <div>
                <h4>Java</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <VerifiedIcon className="experience_detail-icon" />
              <div>
                <h4>Spring Boot</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <VerifiedIcon className="experience_detail-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
