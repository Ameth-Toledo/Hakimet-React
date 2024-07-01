import React from "react";

const Input = ({ tipo, contenido, id, onClick, className }) => {
  return (
    <>
      <input className={className} type={tipo} placeholder={contenido} id={id} onClick={onClick} />
    </>
  );
}

export default Input;
