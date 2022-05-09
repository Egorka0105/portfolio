import React from 'react';
// @ts-ignore
import CV from "assets/Ihor_Dudkevych.pdf"

const CvLink = () => {
    return (
        <a className={"downloadCV-link"} href={CV} download={true}>
            Download CV
        </a>


    );
};

export default CvLink;
