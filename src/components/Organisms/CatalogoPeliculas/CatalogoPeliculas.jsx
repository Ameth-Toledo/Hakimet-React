import React from "react";
import Imagen from "../../Atoms/Imagen/Imagen";
import tensei from "../../../assets/peliculas-img/Ataque a los Titanes La Pelicula EL Arco y la Flecha Escarlata Latino.jpg";
import Black from "../../../assets//peliculas-img/Ataque a los Titanes La Pelicula El rugido del desperta Latino.jpg";
import Jujutsu from "../../../assets/peliculas-img/Bayonetta Destino Sangriento Latino.jpg";
import One from "../../../assets/peliculas-img/Blame! La Película Latino.jpg";
import Jujutsu2 from "../../../assets/peliculas-img/Demon Slayer Kimetsu no Yaiba To the Hashira Training Latino.jpg";
import Kimetsu from "../../../assets/peliculas-img/Cowboy Bebop La Pelicula Llamando a las puertas del cielo Latino.jpg";
import Shingeki from "../../../assets/peliculas-img/Ghost in the Shell Arise Border 4 Fantasma solitario.jpg";
import Mashle from "../../../assets/peliculas-img/Kuramerukagari Pelicula.jpg";
import Mashle2 from "../../../assets/peliculas-img/La tumba de las luciernagas Latino.jpg";
import One2 from "../../../assets/peliculas-img/Shiki Oriori Sabores de la juventud Latino.jpg";
import Wind from "../../../assets/peliculas-img/Youjo Senki La Pelicula Latino.jpg";
import Shitara from "../../../assets/peliculas-img/Sword Art Online Progressive Movie Kuraki Yuuyami no Scherzo.jpg";

const CatalogoPeliculas = () => {
    return (
        <>
            <div className="image-container">
                <Imagen src={tensei} className="bottom-image" />
                <Imagen src={Black} className="bottom-image" />
                <Imagen src={One} className="bottom-image" />
                <Imagen src={Jujutsu} className="bottom-image" />
                <Imagen src={Jujutsu2} className="bottom-image" />
                <Imagen src={Kimetsu} className="bottom-image" />
                <Imagen src={Shingeki} className="bottom-image" />
                <Imagen src={Mashle} className="bottom-image" />
                <Imagen src={Mashle2} className="bottom-image" />
                <Imagen src={One2} className="bottom-image" />
                <Imagen src={Wind} className="bottom-image" />
                <Imagen src={Shitara} className="bottom-image" />
            </div>
        </>
    );
}

export default CatalogoPeliculas;
