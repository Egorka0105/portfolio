import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import clN from "./navBar.module.scss"
import {useAppDispatch} from "core/interfaces";
import {modalNavAnimationOpen} from "store/portfolioSlice"

const NavBar = () => {
    const dispatch = useAppDispatch();

    return (
        <nav className={clN.navBar}>
            <NavLink onClick={() => {
                dispatch(modalNavAnimationOpen(true))
            }} className={clN.navBar__item} to={"about"}>
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
