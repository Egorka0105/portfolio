import React from 'react';
import clN from "./menu.module.scss"
// @ts-ignore
import CV from "assets/Ihor_Dudkevych.pdf"

const CvLink = () => {
    return (
        <a className={clN.downloadCV} href={CV} download={true}>
            Download CV
        </a>


    );
};

export default CvLink;
