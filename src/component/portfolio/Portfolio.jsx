import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="this is photo"
            />
          </div>
          <h3>Data Asset Management System</h3>
          <p>
            I developed a web app using Spring Boot, React.js, and MySQL to
            streamline asset and employee management, attendance tracking, and
            vendor information. It automated processes, improved operational
            efficiency, and featured a responsive UI with Redux for state
            management, ensuring effective data handling and user-friendly
            experienc
          </p>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img
              src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="this is photo"
            />
          </div>
          <h3>iDataOps </h3>
          <p>
            Machine Monitoring Software tracks real-time machine operations,
            utilizes advanced Overall Equipment Effectiveness (OEE) metrics, and
            enhances operational efficiency by overcoming downtime challenges
            effectively.
          </p>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img
              src="https://images.pexels.com/photos/941555/pexels-photo-941555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="this is photo"
            />
          </div>
          <h3>qDataOps</h3>
          <p>
            Introducing Quality Console, a centralized Quality Control Command
            Center for realtime monitoring of manufacturing quality checks.
            Automate data quality checks, streamline inspection processes, and
            empower decision makers with data-driven dashboards. Elevate your
            quality management system and make informed,strategic decisions for
            enhanced business performance.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
