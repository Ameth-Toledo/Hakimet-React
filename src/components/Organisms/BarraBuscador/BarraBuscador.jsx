import React from "react";
import Header from "../../Atoms/Header/Header";
import Imagen from "../../Atoms/Imagen/Imagen";
import logo from "../../../assets/recursos/logotipo-Hakimet.png";
import Button_Imagen from "../Button_Imagen/Button_Imagen";
import Registrarse from "../../../assets/recursos/registrarse.png";
import Input from "../../Atoms/Input/Input";
import "./style.css";

const BarraBuscador = () => {
  return (
    <div className="topbar">
      <Header className="topbar-header" >
        <Input tipo="text" contenido="buscar"/>
        </Header>
      <div className="topbar-content">
        <Imagen src={logo} alt="Hakimet Logo" className="logo" />
        <Input tipo="text" contenido="Buscar..." id="navbar-search" className="search-input" />
        <Button_Imagen
          nombre="𝗥𝗲𝗴𝗶𝘀𝘁𝗿𝗮𝗿𝘀𝗲"
          className="login-btn"
          imgSrc={Registrarse}
          imgAlt="Login"
        />
      </div>
    </div>
  );
};

export default BarraBuscador;
