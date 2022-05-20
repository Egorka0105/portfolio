import React from 'react';
import ModalWindowNavAnimation from "../ModalWindowNavAnimation/ModalWindowNavAnimation";
import clN from "./about.module.scss"

const About = () => {
    return (
        <>
            <ModalWindowNavAnimation/>
            <div className={clN.about}>
                <h2 className={clN.title}>
                    Some text
                </h2>
            </div>
        </>
    );
};

export default About;
