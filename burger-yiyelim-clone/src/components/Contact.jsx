import React from "react";
import BannerImage from "../assets/banner.png";
import "../styles/Contact.css";
function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="rightSide">
        <h1>Bizimle iletisime gecin</h1>
        <form>
          <label>Ad Soyad</label>
          <input    
            type="text"
            name="name"
            placeholder="Lutfen adinizi soyadinizi giriniz..."
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Lutfen emailinizi  giriniz..."
          />
          <label>Mesajiniz</label>
          <textarea
            rows="6"
            name="message"
            placeholder="Lutfen mesajinizi giriniz..."
          ></textarea>
        </form>
      </div>
    </div>
  );
}

export default Contact;
