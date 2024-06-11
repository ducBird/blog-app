import React from "react";
import Logo from "../../assets/img/logo-blog-7.png";
import "./footer.scss";
const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
        Made with ♥️ and <b>React.js</b>.
      </span>
    </footer>
  );
};

export default Footer;
