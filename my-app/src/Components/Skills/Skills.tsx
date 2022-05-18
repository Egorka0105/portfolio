import React, {FC} from 'react';
import ModalWindowNavAnimation from "../ModalWindowNavAnimation/ModalWindowNavAnimation";
import clN from "./skills.module.scss"
import {ISkill, useAppSelector} from "core/interfaces";
import ItemSkill from "./ItemSkill";
import Experience from "./Experience/Experience";

const Skills: FC = () => {
    const allSkills = useAppSelector(state => state.portfolio.skills);


    return (
        <>
            <ModalWindowNavAnimation/>
            <div className={clN.skills}>
                <div className={clN.skills__textContent}>
                    <p className={clN.text}>
                        {allSkills.textAboutSkills}
                    </p>
                </div>
                <div className={clN.skills__skillsContent}>
                    <ul>
                        {allSkills.allSkillsMap.map((el: ISkill) => {
                            return <ItemSkill key={el.key} name={el.name} level={el.levelPercent}/>
                        })}
                    </ul>
                    <Experience jobs={allSkills.experience}/>
                </div>
            </div>
        </>
    );
};

export default Skills;
