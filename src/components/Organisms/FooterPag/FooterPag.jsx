import React from "react";
import Footer from "../../Atoms/Footer/Footer";
import Imagen from "../../Atoms/Imagen/Imagen";
import Logo from "../../../assets/recursos/logotipo-Hakimet2.png";
import Enlace from "../../Atoms/Enlace/Enlace";

const FooterPag = () => {
    return (
        <>
            <Footer className="footer">
                <div className="footer-content">
                    <div className="footer-logo">
                        <Imagen src={Logo} />
                    </div>
                    <div className="social-bar">
                        <Enlace direccion={"https://www.facebook.com/profile.php?id=100084591330047"} className="social-icon">
                            <Imagen src={"https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg"}/>
                        </Enlace>
                        <Enlace direccion={"https://www.instagram.com/ameth_toled/?hl=es"} className="social-icon">
                            <Imagen src={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"}/>
                        </Enlace>
                        <Enlace direccion={"https://wa.me/qr/IB7N3W2OXSFHL1"} className="social-icon">
                            <Imagen src={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png"}/>                            
                        </Enlace>
                    </div>
                    <div className="footer-text">
                        Hakimet Ningun video se encuentra alojado en nuestros servidores. Todos los videos enlazados son tomados de internet, de sitios webs gratuitos. Todos los contenidos son proporcionados por terceros no afiliados.
                    </div>
                </div>
                <div className="footer-background-overlay"></div>
                <Imagen src={"https://elcomercio.pe/resizer/wYkqgXwOqgwhXSiZRNVopn5HumE=/1200x675/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/IAZ53YXFIZCLXOQHCTT4JDQB24.jpg"} className="footer-background"/>
                <div className="footer-copyright">
                    Copyright © 2024 Hakimet Anime. All Rights Reserved
                </div>
            </Footer>
        </>
    );
}

export default FooterPag;
