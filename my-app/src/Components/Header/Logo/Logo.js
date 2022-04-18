import React from 'react';
import clN from "./logo.module.scss"

const Logo = () => {
    return (
        <div className={clN.logoBlock}>
            <h2>
                <span className={clN.letter}>I</span>
                <span className={clN.letter}>.</span>
                <span className={clN.letter}>D</span>
            </h2>
            <p className={clN.job}>Web Developer</p>
        </div>
    );
};

export default Logo;
