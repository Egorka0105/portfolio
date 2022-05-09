import React from 'react';
import clN from "./skills.module.scss"


// @ts-ignore
const ItemSkill = ({skill}) => {

    return (
        <li className={clN.skillItem}>
            {skill.name}
        </li>
    );
};

export default ItemSkill;
