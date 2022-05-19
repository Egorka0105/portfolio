import React from 'react';
import clN from "./logo.module.scss"
import {NavLink} from "react-router-dom";
import {useAppDispatch} from "core/interfaces";
import {changeMobileIsOpen} from "store/portfolioSlice";

const Logo = () => {
    const dispatch = useAppDispatch();

    return (
        <NavLink onClick={()=>dispatch(changeMobileIsOpen())} to={""}>
            <div className={clN.logoBlock}>
                <h2 className={clN.letter}>
                    I.D
                </h2>
                <p className={clN.job}>Web Developer</p>
            </div>
        </NavLink>
    );
};

export default Logo;
