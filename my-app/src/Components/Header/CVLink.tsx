import React from 'react';
import clN from "./menu.module.scss"
// @ts-ignore
import CV from "assets/Ihor_Dudkevych.pdf"

const CvLink = () => {
    return (
        <div className={clN.downloadCV}>
            <a  href={CV} download={true}>
                Download CV
            </a>
        </div>
    );
};

export default CvLink;
