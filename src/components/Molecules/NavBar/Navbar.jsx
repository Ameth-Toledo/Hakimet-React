import React from "react";
import PropTypes from "prop-types";
import Header from "../../Atoms/Header/Header";
import Imagen from "../../Atoms/Imagen/Imagen";
import logo from "../../../assets/recursos/logotipo-Hakimet.png";
import Button_Imagen from "../Button_Imagen/Button_Imagen";
import Registrarse from "../../../assets/recursos/registrarse.png";
import "./Navbar.css";

const Navbar = ({ children }) => {
  return (
    <div className="topbar">
      <Header className="topbar" />
      <Imagen src={logo} alt="Hakimet Logo" className="logo" />
      {children}
      <Button_Imagen 
        nombre="𝗥𝗲𝗴𝗶𝘀𝘁𝗿𝗮𝗿𝘀𝗲" 
        className="login-btn" 
        imgSrc={Registrarse} 
        imgAlt="Login" 
      />
    </div>
  );
}

Navbar.propTypes = {
  children: PropTypes.node
};

export default Navbar;
