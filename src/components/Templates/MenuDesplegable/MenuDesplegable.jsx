import React, { useState } from "react";
import Imagen from "../../Atoms/Imagen/Imagen";
import MenuIcon from '../../../assets/recursos/menu.png';
import "./MenuDesplegable.css";

const MenuDesplegable = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className="menu-icon" onClick={toggleMenu}>
                <Imagen src={MenuIcon} alt="Menu Icon" />
            </div>
            <div id="side-menu" className={`side-menu ${menuOpen ? 'open' : ''}`}>
                <a href="#">Home</a>
                <a href="#">Animes</a>
                <a href="#">Peliculas</a>
                <a href="#">Contactos</a>
                <div className="close-btn" onClick={toggleMenu}>&times;</div>
            </div>
        </>
    );
}

export default MenuDesplegable;
