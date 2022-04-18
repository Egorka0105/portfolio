import React from 'react';
import {NavLink} from "react-router-dom";
import clN from "./navBar.module.scss"

const NavBar = () => {
    return (
        <nav className={clN.navBar}>
            <NavLink className={clN.navBar__item} to={"about"}>
                About
            </NavLink>
            <NavLink className={clN.navBar__item} to={"skills"}>
                Skills
            </NavLink>
            <NavLink className={clN.navBar__item} to={"works"}>
                Works
            </NavLink>
            <NavLink className={clN.navBar__item} to={"contact"}>
                Contact
            </NavLink>
        </nav>
    );
};

export default NavBar;
