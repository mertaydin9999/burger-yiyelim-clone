import React from "react";
import BannerImage from "../assets/banneryeni.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkimizda</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
          optio commodi blanditiis, debitis quaerat id ut voluptatum placeat,
          dolorum maxime, obcaecati nobis numquam labore harum beatae autem
          culpa impedit fugit. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Quibusdam temporibus recusandae explicabo placeat
          veniam ipsam nobis expedita similique necessitatibus, tempore nisi
          nemo quia laborum tenetur esse odio ut omnis sed? Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Dolorum saepe nemo aliquid
          cumque culpa tempore fuga hic tempora doloremque, ullam deserunt, esse
          aliquam quaerat, error itaque nobis! Impedit, maiores fugit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Autem aliquid
          voluptatum dignissimos! Commodi nemo mollitia at repudiandae neque
          accusantium numquam ut tempora, magnam laudantium a, dolorum quia
          atque rerum beatae
        </p>
      </div>
    </div>
  );
}

export default About;
