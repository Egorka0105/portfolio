import React from 'react';
import "./header.scss"
import Logo from "./Logo/Logo";

const Header = () => {

    return (
        <div className={"header"}>
            <Logo/>
            <nav className={"nav-bar"}></nav>
            <div className={"links-block"}>

            </div>
        </div>
    );
};

export default Header;
