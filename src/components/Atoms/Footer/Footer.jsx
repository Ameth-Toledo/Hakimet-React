import React from "react";

const Footer = ({ className, children }) => {
    return (
        <footer className={className}>
            {children}
        </footer>
    );
}

export default Footer;