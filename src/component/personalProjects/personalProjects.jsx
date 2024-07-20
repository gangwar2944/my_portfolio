import React from "react";
import "./personalProjects.css";
import spaceX from "../../Images/spaceX.jpg";
import ecoomerce from "../../Images/ecommerce.png";
import whatsapp from "../../Images/whatsapps.png";
import { GitHub } from "@mui/icons-material";

const PersonalProjects = () => {
  return (
    <section id="portfolio">
      <h2>Personal Projects</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={ecoomerce} alt="ecoomerce" />
          </div>
          <h3>Ecommerce Website</h3>
          <p>
            ShopMaster is a robust e-commerce platform featuring a dynamic user
            experience and a powerful admin panel. Built with React and Redux
            for a seamless frontend, Java Spring Boot for scalable backend
            services, and MySQL for reliable database management. Manage
            products, process orders, and track sales with ease.
          </p>
          <a
            className="btn btn-primary flex"
            href="https://github.com/gangwar2944/OnlineShop"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub /> Github
          </a>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={whatsapp} alt="whatsapp" />
          </div>
          <h3>WhatsApp Clone</h3>
          <p>
            ChatConnect is a WhatsApp clone offering seamless instant messaging,
            media sharing, and group chats. Enjoy secure, encrypted
            communication with a user-friendly interface designed for effective,
            reliable text conversation. Experience enhanced connectivity and
            performance on mobile and desktop devices.
          </p>
          <a
            className="btn btn-primary flex"
            href="https://github.com/gangwar2944/Whatsapp-UI"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub /> Github
          </a>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={spaceX} alt="spaceX" />
          </div>
          <h3>Arrow Space Info Website </h3>
          <p>
            Introducing Quality Console, a centralized Quality Control Command
            Aerospace Insights provides real-time rocket and spacecraft
            information, aerospace news, and stock market insights via
            third-party APIs. Explore the latest advancements and investment
            opportunities in space technology with ease..
          </p>
          <a
            className="btn btn-primary flex"
            href="https://github.com/gangwar2944/Vishal-Frontend-developer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub /> Github
          </a>
        </article>
      </div>
    </section>
  );
};

export default PersonalProjects;
