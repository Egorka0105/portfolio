import React from 'react';
import "./header.scss"
import Logo from "./Logo/Logo";
import Links from "./Links/Links";
import NavBar from "./NavBar/NavBar";

const Header = () => {

    return (
        <div className={"header"}>
            <Logo/>
            <NavBar/>
            <Links/>
        </div>
    );
};

export default Header;
