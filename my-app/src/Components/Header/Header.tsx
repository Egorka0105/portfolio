import React from 'react';
import "./header.scss"
import Logo from "./Logo/Logo";
import Links from "./Links/Links";
import NavBar from "./NavBar/NavBar";
import CvLink from "./CVLink";

const Header = () => {

    return (
        <div className={"header"}>
            <Logo/>
            <NavBar/>
            <Links/>
            <CvLink/>
        </div>
    );
};

export default Header;
