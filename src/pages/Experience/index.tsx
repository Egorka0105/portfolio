import { FC } from 'react';
import { AnimationModal, ExperienceCanvas } from 'Components';
import content from 'core/content.json';
import clN from './index.module.scss';

interface IExperienceProject {
	title: string;
	tools: string;
	responsibilities: string;
}

const time = ['3.0s', '3.3s', '3.5s', '3.8s'];

export const Experience: FC = () => {
	const { experience } = content;
	return (
		<>
			<AnimationModal />

			<div className={clN.experience}>
				<div className={clN.experience__wrapper}>
					{experience.map((project: IExperienceProject, index: number) => {
						return (
							<div
								style={{ animation: `experience ${time[index]} ease-out forwards` }}
								className={clN.experience__content}
								key={project.title}
							>
								<h2 className={clN.title}>{project.title}</h2>
								<div className={clN.tools}>
									<span>Tools: </span>
									<span>{project.tools}</span>
								</div>
								<div className={clN.responsibilities}>
									<span>Responsibilities: </span>
									<span>{project.responsibilities}</span>
								</div>
							</div>
						);
					})}
				</div>

				<ExperienceCanvas />
			</div>
		</>
	);
};
