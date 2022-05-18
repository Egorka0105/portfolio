import React from 'react';
import clN from "./logo.module.scss"
import {NavLink} from "react-router-dom";

const Logo = () => {
    return (
        <NavLink to={""}>
            <div className={clN.logoBlock}>
                <h2 className={clN.letter}>
                    I.D
                    {/*<span className={clN.letter}>I</span>
                    <span className={clN.letter}>.</span>
                    <span className={clN.letter}>D</span>*/}
                </h2>
                <p className={clN.job}>Web Developer</p>
            </div>
        </NavLink>
    );
};

export default Logo;
