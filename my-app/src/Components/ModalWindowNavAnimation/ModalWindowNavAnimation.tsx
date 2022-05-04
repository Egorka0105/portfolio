import React from 'react';
import waitingImg from 'assets/img/waitingImg.png'
import clN from "./modalWindowNavAnimation.module.scss"


const ModalWindowNavAnimation = () => {
    return (
        <div className={clN.modalNavAnimationWrapper}>
            <div className={clN.windowNavAnimation}>
                <div className={clN.windowNavAnimation__img}>
                    <img src={waitingImg} alt={"waiting"}/>
                </div>
            </div>
        </div>
    );
};

export default ModalWindowNavAnimation;
