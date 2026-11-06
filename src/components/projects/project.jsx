import React from "react";

import ProjectCover from "./projectCover";

import "./styles/project.css";

const MAX_TAGS = 3;

const Project = ({ project, onOpen }) => {
	const { title, tagline, category, year, stack = [] } = project;
	const extra = stack.length - MAX_TAGS;

	return (
		<button
			type="button"
			className="project"
			onClick={onOpen}
			aria-label={`Open ${title}`}
		>
			<ProjectCover project={project} className="project-cover" />
			<div className="project-container">
				<div className="project-meta">
					<span className={`chip chip-${(category || "").toLowerCase()}`}>
						{category}
					</span>
					{year && <span className="project-year">{year}</span>}
				</div>
				<div className="project-title">{title}</div>
				<div className="project-description">{tagline}</div>
				<div className="project-tags">
					{stack.slice(0, MAX_TAGS).map((tag) => (
						<span className="tag" key={tag}>
							{tag}
						</span>
					))}
					{extra > 0 && <span className="tag tag-more">+{extra}</span>}
				</div>
			</div>
		</button>
	);
};

export default Project;
