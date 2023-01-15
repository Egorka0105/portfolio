import { FC } from 'react';
import { IExperienceItem } from 'core/interfaces';
import content from 'core/content.json';
import clN from './index.module.scss';

export const Jobs: FC = () => {
	const { jobs } = content.experience;

	return (
		<div className={clN.jobs}>
			<h2 className={clN.jobs__title}>Work Experience</h2>
			<div className={clN.allJobs}>
				{jobs.map((company: IExperienceItem) => {
					return (
						<div key={company.key} className={clN.allJobs__wrapper}>
							<h5 className={clN.position}>{company.position}</h5>
							<h6 className={clN.company}>{company.companyName}</h6>
							<span className={clN.period}>{company.dayStart}</span>
							<span>-</span>
							<span className={clN.period}>{company.dayFinish}</span>
							<p className={clN.location}>{company.location}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};
