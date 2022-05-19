import React from 'react';
import {NavLink} from "react-router-dom";
import clN from "./navBar.module.scss"
import {useAppDispatch} from "core/interfaces";
import {changeMobileIsOpen} from "store/portfolioSlice";

const NavBar = () => {
    const dispatch = useAppDispatch();


    return (
        <nav className={clN.navBar}>
            <NavLink onClick={() => dispatch(changeMobileIsOpen())} className={clN.navBar__item} to={"about"}>
                About
            </NavLink>
            <NavLink onClick={() => dispatch(changeMobileIsOpen())} className={clN.navBar__item} to={"skills"}>
                Skills
            </NavLink>
            <NavLink onClick={() => dispatch(changeMobileIsOpen())} className={clN.navBar__item} to={"works"}>
                Works
            </NavLink>
            <NavLink onClick={() => dispatch(changeMobileIsOpen())} className={clN.navBar__item} to={"contact"}>
                Contact
            </NavLink>
        </nav>
    );
};

export default NavBar;
