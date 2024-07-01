import React from "react";

const Label = ({ contenido, className }) => {
    return (
    <>
    <label className={className}>{ contenido }</label>
    </>
    );
}

export default Label;