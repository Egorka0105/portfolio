import React, {FC} from 'react';
import ModalWindowNavAnimation from "../ModalWindowNavAnimation/ModalWindowNavAnimation";
import clN from "./skills.module.scss"
import skillsJson from "core/info.json"
import {ISkill} from "../../core/interfaces";
import ItemSkill from "./ItemSkill";

const Skills: FC = () => {
    const allSkills = skillsJson.skills.allSkillsMap;

    return (
        <>
            <ModalWindowNavAnimation/>
            <div className={clN.skills}>
                <div className={clN.skills__textContent}>
                    <p className={clN.text}>
                        {skillsJson.skills.textAboutSkills}
                    </p>
                </div>
                <div className={clN.skills__skillsContent}>
                    <ul>
                        {allSkills.map((el: ISkill) => {
                            return <ItemSkill key={el.key} skill={el}/>
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Skills;
