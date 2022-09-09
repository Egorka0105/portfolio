import React from 'react';
import { IExperienceItem } from 'core/interfaces';
import content from 'core/content.json';
import './experience.scss';

const Jobs = () => {
	const { jobs } = content.experience;
	return (
		<div className="jobs">
			<h2 className="jobs__title">Work Experience</h2>
			<div className="allJobs">
				{jobs.map((company: IExperienceItem) => {
					return (
						<div key={company.key} className="allJobs__wrapper">
							<h5 className="position">{company.position}</h5>
							<h6 className="company">{company.companyName}</h6>
							<span className="period">{company.dayStart}</span>
							<span>-</span>
							<span className="period">{company.dayFinish}</span>
							<p className="location">{company.location}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Jobs;
