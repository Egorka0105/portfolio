import React, {FC} from 'react';
import clN from "./skills.module.scss"

type Props = {
    name: string;
    level: string;
}

const ItemSkill: FC<Props> = ({name, level}) => {


    return (
        <li className={clN.skillItem}>
            {name}
            <span style={{maxWidth: `${level}%`}} className={clN.skillItem__levelLine}/>
        </li>
    );
};

export default ItemSkill;
