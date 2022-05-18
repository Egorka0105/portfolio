import React from 'react';
import clN from "./mobileBtn.module.scss"
import {useAppDispatch} from "core/interfaces";
import {changeMobileIsOpen} from "store/portfolioSlice";


const MobileBtn = () => {
    const dispatch = useAppDispatch();


    return (
        <div className={clN.mobileMenu}>
            <div onClick={() => dispatch(changeMobileIsOpen())} className={clN.mobileBtn}>
                <span className={clN.mobileBtn__line}/>
            </div>
        </div>
    );
};

export default MobileBtn;
