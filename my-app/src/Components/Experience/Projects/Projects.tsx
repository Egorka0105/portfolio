import React from 'react';
import content from 'core/content.json';
import './projects.scss';

const Projects = () => {
	const { projects } = content.experience;
	return (
		<div className="projects">
			<h2 className="projects__title">Projects </h2>
			<div className="project-wrapper">
				{projects.map(project => {
					return (
						<div key={project.key} className="project">
							<h4 className="project__title">{project.name}</h4>
							<p className="project__role">Role: {project.role}</p>
							<p className="project__tools">Project tools: {project.tools}</p>
							<p className="project__responsibilities">Responsibilities: {project.responsibilities}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Projects;
