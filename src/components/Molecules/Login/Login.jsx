import React from "react";
import H1 from "../../Atoms/H1/H1";
import Input from "../../Atoms/Input/Input";
import Button from "../../Atoms/Button/Button";
import { togglePasswordVisibility, handleIniciarSesion } from "./script";
import "./style.css"; 
import Label from "../../Atoms/Label/Label";
import Enlace from "../../Atoms/Enlace/Enlace";

const Login = () => {
  return (
    <div className="login-container">
      <H1 contenido="Inicia sesión" />
      <Label contenido="𝗨𝘀𝘂𝗮𝗿𝗶𝗼:"/>
      <Input contenido="Ingrese su usuario" tipo="text" id="RUser" className="input" />
      <Label contenido="𝗖𝗼𝗻𝘁𝗿𝗮𝘀𝗲𝗻𝗮:"/>
      <Input contenido="Ingrese su contraseña" tipo="password" id="RPass" className="input" />
      <Label contenido={
        <>
          <Input tipo="checkbox" id="showPass" onClick={togglePasswordVisibility} />
          𝗠𝗼𝘀𝘁𝗿𝗮𝗿 𝗰𝗼𝗻𝘁𝗿𝗮𝘀𝗲𝗻𝗮
        </>
      } className="show-password-label" />
      <Button nombre="𝗜𝗻𝗴𝗿𝗲𝘀𝗮𝗿" className="button" onClick={handleIniciarSesion} />
      <div className="custom-box"></div>
      <div className="register-text">
        ¿No tienes cuenta? <Enlace direccion="registro.html" mensaje="Regístrate aquí" />
      </div>
    </div>
  );
}

export default Login;
