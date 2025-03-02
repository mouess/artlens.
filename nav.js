import React from "react";
import "./nav.css";

const Nav = ({ data }) => {
    const logo = data?.images?.find(img => img.name === "full-logo")?.src;

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav>
            <div>
                {logo ? (
                    <img src={logo} alt="Logo" width="100px" onClick={() => window.location.reload()}/>
                ) : (
                    <p>logo undefined</p>
                )}
            </div>
            <ul>
                <li onClick={() => scrollToSection("home")}>Home</li>
                <li onClick={() => scrollToSection("services")}>Our Services</li>
                <li onClick={() => scrollToSection("work")}>Our Work</li>
                <li onClick={() => scrollToSection("contact")}>Contact</li>
            </ul>
        </nav>
    );
};

export default Nav;
