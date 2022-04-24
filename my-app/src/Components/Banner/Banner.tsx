import React from 'react';
import clN from "./banner.module.scss"

const Banner = () => {
    return (
        <div className={clN.banner}>
            <h1 className={clN.banner__title}>
                <span>H</span>
                <span>i</span>
                <span>,</span>
                <br/>
                <span>I</span>
                <span>’</span>
                <span>m</span>
                &nbsp;
                <span>I</span>
                <span>h</span>
                <span>o</span>
                <span>r</span>
                &nbsp;
                <span>D</span>
                <span>u</span>
                <span>d</span>
                <span>k</span>
                <span>e</span>
                <span>v</span>
                <span>y</span>
                <span>c</span>
                <span>h</span>
                <span>,</span>
                <br/>
                <span>W</span>
                <span>e</span>
                <span>b</span>
                &nbsp;
                <span>d</span>
                <span>e</span>
                <span>v</span>
                <span>e</span>
                <span>l</span>
                <span>o</span>
                <span>p</span>
                <span>e</span>
                <span>r</span>
            </h1>
            <p className={clN.banner__subTitle}>
                Front-end / React developer
            </p>
            <button className={clN.banner__btnContact}>
                Contact me
            </button>
        </div>
    );
};

export default Banner;
