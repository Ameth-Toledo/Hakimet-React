import React from "react";
import Navbar from "../../Molecules/NavBar/Navbar";
import Banner from "../../Organisms/Banner/Banner";
import CatalogoAnimes from "../../Organisms/CatalogoAnimes/CatalogoAnimes";
import CatalogoPeliculas from "../../Organisms/CatalogoPeliculas/CatalogoPeliculas";
import Barra from "../../Organisms/Barra/Barra";
import FooterPag from "../../Organisms/FooterPag/FooterPag";
import Input from "../../Atoms/Input/Input";
import MenuDesplegable from "../../Templates/MenuDesplegable/MenuDesplegable";
import './style.css'; // Ajusta el nombre según tus preferencias de estilos

const Home = () => {
    return (
        <>
            <Navbar>
                <Input tipo={"text"} className="search-input" contenido="Buscar anime" />
                <MenuDesplegable />
            </Navbar>
            <Banner />
            <Barra contenido={"𝑨𝒏𝒊𝒎𝒆𝒔"} />
            <CatalogoAnimes />
            <Barra contenido={"𝑷𝒆𝒍𝒊𝒄𝒖𝒍𝒂𝒔"} />
            <CatalogoPeliculas />
            <FooterPag />
        </>
    );
}

export default Home;
