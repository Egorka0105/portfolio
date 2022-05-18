import React, {FC} from 'react';
import clN from "./experience.module.scss"
import {IExperienceItem} from 'core/interfaces'

interface IProps {
    jobs: IExperienceItem[];
}


const Experience: FC<IProps> = ({jobs}) => {

    return (
        <div className={clN.experience}>
            <h2>Work Experience</h2>
            {jobs.map(el => {
                return (
                    <div className={clN.experience__item}>
                        <h5 className={clN.position}>{el.position}</h5>
                        <h6 className={clN.company}>{el.companyName}</h6>
                        <span className={clN.period}>{el.dayStart}</span> - <span
                        className={clN.period}>{el.dayFinish}</span>
                        <p className={clN.location}>{el.location}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default Experience;
