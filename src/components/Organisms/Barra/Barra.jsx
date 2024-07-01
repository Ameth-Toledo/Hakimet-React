import React from "react";
import H1 from "../../Atoms/H1/H1";

const Barra = ({contenido}) => {
    return (
        <>
        <div class="text-container">
            <H1 contenido={contenido}/>
        <div class="bar"></div>
    </div>
    </>
    );
}

export default Barra;