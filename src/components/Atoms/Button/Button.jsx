import React from "react";

const Button = ({ nombre, className, onClick, id }) => {
  return (
    <>
    <button className={className} onClick={onClick} id={id} >{nombre}</button>
    </>
  );
}

export default Button;