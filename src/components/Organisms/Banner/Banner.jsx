import React from "react";
import H1 from "../../Atoms/H1/H1"
import Button from "../../Molecules/Button_Imagen/Button_Imagen";
import Imagen from "../../Atoms/Imagen/Imagen";
import banner from "../../../assets/recursos/banner.avif"
import './style.css'

const Banner = () => {
    const redirectToReproduct1 = () => {
        // aqui despues pa q me lleve a otra pagina
        console.log("Redirigiendo al reproductor...");
    };

    return (
        <>
            <div className="content-container">
                <div className="image-text-overlay">
                    <Imagen src={banner} className={"demon-slayer-image"}/>
                    <div className="gradient-overlay"></div>
                    <div className="text-overlay">
                        <H1 contenido={"𝗗𝗲𝗺𝗼𝗻 𝗦𝗹𝗮𝘆𝗲𝗿"}/>
                        
                        <p>𝙀𝙨𝙩𝙖𝙢𝙤𝙨 𝙚𝙣 𝙡𝙖 𝙚𝙧𝙖 𝙏𝙖𝙞𝙨𝙝𝙤 𝙙𝙚 𝙅𝙖𝙥𝙤𝙣. 𝙏𝙖𝙣𝙟𝙞𝙧𝙤, 𝙪𝙣 𝙟𝙤𝙫𝙚𝙣 𝙦𝙪𝙚 𝙨𝙚 𝙜𝙖𝙣𝙖 𝙡𝙖 𝙫𝙞𝙙𝙖 𝙫𝙚𝙣𝙙𝙞𝙚𝙣𝙙𝙤 𝙘𝙖𝙧𝙗𝙤𝙣, 𝙙𝙚𝙨𝙘𝙪𝙗𝙧𝙚 𝙪𝙣 𝙙𝙞𝙖 𝙦𝙪𝙚 𝙨𝙪 𝙛𝙖𝙢𝙞𝙡𝙞𝙖 𝙝𝙖 𝙨𝙞𝙙𝙤 𝙖𝙨𝙚𝙨𝙞𝙣𝙖𝙙𝙖 𝙥𝙤𝙧 𝙪𝙣 
                            𝙙𝙚𝙢𝙤𝙣𝙞𝙤. 𝙋𝙖𝙧𝙖 𝙚𝙢𝙥𝙚𝙤𝙧𝙖𝙧 𝙡𝙖𝙨 𝙘𝙤𝙨𝙖𝙨, 𝙨𝙪 𝙝𝙚𝙧𝙢𝙖𝙣𝙖 𝙢𝙚𝙣𝙤𝙧 𝙉𝙚𝙯𝙪𝙠𝙤, 𝙡𝙖 𝙪𝙣𝙞𝙘𝙖 𝙨𝙪𝙥𝙚𝙧𝙫𝙞𝙫𝙞𝙚𝙣𝙩𝙚 𝙙𝙚 𝙡𝙖 𝙢𝙖𝙨𝙖𝙘𝙧𝙚, 𝙝𝙖 𝙨𝙪𝙛𝙧𝙞𝙙𝙤 𝙪𝙣𝙖 𝙩𝙧𝙖𝙣𝙨𝙛𝙤𝙧𝙢𝙖𝙘𝙞𝙤𝙣 𝙚𝙣 𝙙𝙚𝙢𝙤𝙣𝙞𝙤. 
                            𝘿𝙚𝙨𝙩𝙧𝙤𝙯𝙖𝙙𝙤 𝙥𝙤𝙧 𝙡𝙤𝙨 𝙖𝙘𝙤𝙣𝙩𝙚𝙘𝙞𝙢𝙞𝙚𝙣𝙩𝙤𝙨, 𝙏𝙖𝙣𝙟𝙞𝙧𝙤 𝙙𝙚𝙘𝙞𝙙𝙚 𝙘𝙤𝙣𝙫𝙚𝙧𝙩𝙞𝙧𝙨𝙚 𝙚𝙣 𝙪𝙣 𝙘𝙖𝙯𝙖𝙙𝙤𝙧 𝙙𝙚 𝙙𝙚𝙢𝙤𝙣𝙞𝙤𝙨 𝙥𝙖𝙧𝙖 𝙥𝙤𝙙𝙚𝙧 𝙙𝙚𝙫𝙤𝙡𝙫𝙚𝙧 𝙖 𝙨𝙪 𝙝𝙚𝙧𝙢𝙖𝙣𝙖 𝙖 𝙡𝙖 𝙣𝙤𝙧𝙢𝙖𝙡𝙞𝙙𝙖𝙙 𝙮 𝙢𝙖𝙩𝙖𝙧 𝙖𝙡 𝙙𝙚𝙢𝙤𝙣𝙞𝙤 𝙦𝙪𝙚 𝙢𝙖𝙨𝙖𝙘𝙧𝙤 𝙖 𝙨𝙪 𝙛𝙖𝙢𝙞𝙡𝙞𝙖.</p>
                        <Button nombre={"𝗩𝗲𝗿 𝗮𝗵𝗼𝗿𝗮"} className={"ver-ahora-btn"}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;
