import React, { useState } from "react";

import Project from "./project";
import ProjectModal from "./projectModal";

import myProjects from "../../data/projects";

import "./styles/allProjects.css";

const AllProjects = ({ maxProjects }) => {
	const [selectedId, setSelectedId] = useState(null);

	const projects =
		maxProjects !== undefined ? myProjects.slice(0, maxProjects) : myProjects;

	// Look in the full list so project-to-project links work even on the
	// homepage, where only a few cards are shown.
	const selected = myProjects.find((p) => p.id === selectedId);

	return (
		<div className="all-projects-container">
			{projects.map((project) => (
				<div className="all-projects-project" key={project.id}>
					<Project
						project={project}
						onOpen={() => setSelectedId(project.id)}
					/>
				</div>
			))}

			{selected && (
				<ProjectModal
					project={selected}
					onClose={() => setSelectedId(null)}
					onOpenProject={setSelectedId}
				/>
			)}
		</div>
	);
};

export default AllProjects;
