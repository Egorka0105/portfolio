import { FC } from 'react';
import content from 'core/content.json';
import clN from './index.module.scss';

export const Projects: FC = () => {
	const { projects } = content.experience;

	return (
		<div className={clN.projects}>
			<h2 className={clN.projects__title}>Projects </h2>
			<div className={clN.project__wrapper}>
				{projects.map(project => {
					return (
						<div key={project.key} className={clN.project}>
							<h4 className={clN.project__title}>{project.name}</h4>
							<p className={clN.project__role}>Role: {project.role}</p>
							<p className={clN.project__tools}>Project tools: {project.tools}</p>
							<p className={clN.project__responsibilities}>Responsibilities: {project.responsibilities}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};
