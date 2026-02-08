import React, { useState } from "react";

import Project from "./project";

import INFO from "../../data/user";
import myProjects from "../../data/projects";

import "./styles/allProjects.css";
import ProjectModal from "./projectModal";

const AllProjects = ({ maxProjects }) => {
	const [selectedProject, setSelectedProject] = useState(null);

	let projects = myProjects;
	if (maxProjects !== undefined)
		projects = projects.slice(0, maxProjects);

	return (
		<div className="all-projects-container">
			{projects.map((project, index) => (
				<div
					className="all-projects-project"
					key={index}
					onClick={() => setSelectedProject(project())}
				>
					<Project
						logo={project().logo}
						title={project().title}
						description={project().description}
						banner={project().banner}
					/>
				</div>
			))}

			{selectedProject && (<ProjectModal selected={selectedProject} setSelected={setSelectedProject}/>)}
		</div>
	);
};

export default AllProjects;
