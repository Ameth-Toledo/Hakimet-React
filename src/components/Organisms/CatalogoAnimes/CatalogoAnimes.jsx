import React from "react";
import Imagen from "../../Atoms/Imagen/Imagen";
import tensei from "../../../assets/animes/Tensei_Shitara_Temp01.jpg";
import Black from "../../../assets/animes/Black_Clover_Latino.jpg";
import Jujutsu from "../../../assets/animes/Jujutsu_Kaisen_Latino.jpg";
import One from "../../../assets/animes/One_piece_Latino.jpg";
import Jujutsu2 from "../../../assets/animes/Jujutsu_Kaisen_Temporada_2_Latino.jpg";
import Kimetsu from "../../../assets/animes/Kimetsu_no_Yaiba_Demon_Slayer_Temporada_1_Latino.jpg";
import Shingeki from "../../../assets/animes/Shingeki_no_Kyojin_Ataque_a_los_Titanes_Temporada_1_Latino.jpg";
import Mashle from "../../../assets/animes/Mashle_Latino.jpg";
import Mashle2 from "../../../assets/animes/Mashle_Temporada_2_Latino.jpg";
import One2 from "../../../assets/animes/One_Punch_Man_Temporada_2_Latino.jpg";
import Wind from "../../../assets/animes/Wind_Breaker.jpg";
import Shitara from "../../../assets/animes/Tensei_Shitara_Slime_Datta_Ken_3.jpg";
import './stilo.css';

const CatalogoAnimes = () => {
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

export default CatalogoAnimes;
