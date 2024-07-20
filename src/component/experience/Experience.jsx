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
                <h4>HTML</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <VerifiedIcon className="experience_detail-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <VerifiedIcon className="experience_detail-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <VerifiedIcon className="experience_detail-icon" />
              <div>
                <h4>React JS</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <VerifiedIcon className="experience_detail-icon" />
              <div>
                <h4>Tailwind</h4>
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
                <h4>Spring boot</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <VerifiedIcon className="experience_detail-icon" />
              <div>
                <h4>JDBC</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <VerifiedIcon className="experience_detail-icon" />
              <div>
                <h4>Hibernate</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <VerifiedIcon className="experience_detail-icon" />
              <div>
                <h4>Mysql</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <VerifiedIcon className="experience_detail-icon" />
              <div>
                <h4>AWS</h4>
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
