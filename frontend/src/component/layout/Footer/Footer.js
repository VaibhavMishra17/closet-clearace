import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>Closet Clearance.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; Closet Clerance</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/i.vaibhavmishra">Instagram</a>
        <a href="https://www.facebook.com/people/Vaibhav-Mishra/100023981805247/">
          Facebook
        </a>
      </div>
    </footer>
  );
};

export default Footer;
