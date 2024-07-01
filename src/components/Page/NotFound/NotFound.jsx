import React from "react";
import Imagen from "../../Atoms/Imagen/Imagen";
import Error from "../../../assets/recursos/logotipo-Hakimet2.png"

const NotFound = () => {
    return (
        <div>
            <Imagen src={ Error } alt="Error" />
            <h1>Error 404</h1>
        </div>
    );
}

export default NotFound;