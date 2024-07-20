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
          <h3>This is a portfolio item</h3>
          <div className="portfolio_item-cta">
            <a href="http://github.com" className="btn">
              Github
            </a>
            <a
              href="http://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img
              src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="this is photo"
            />
          </div>
          <h3>This is a portfolio item</h3>
          <div className="portfolio_item-cta">
            <a href="http://github.com" className="btn">
              Github
            </a>
            <a
              href="http://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img
              src="https://images.pexels.com/photos/941555/pexels-photo-941555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="this is photo"
            />
          </div>
          <h3>This is a portfolio item</h3>
          <div className="portfolio_item-cta">
            <a href="http://github.com" className="btn">
              Github
            </a>
            <a
              href="http://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
