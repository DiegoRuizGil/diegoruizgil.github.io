import React, { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Project from "./project";
import ProjectModal from "./projectModal";
import ProjectFilters from "./projectFilters";

import myProjects from "../../data/projects";

import "./styles/allProjects.css";

const normalize = (text) =>
	(text || "")
		.toLowerCase()
		.normalize("NFD")
		.replace(/[̀-ͯ]/g, "");

// Everything a project can be found by: title, tagline, category and stack.
const searchableText = (project) =>
	normalize(
		[project.title, project.tagline, project.category, ...(project.stack || [])].join(
			" "
		)
	);

const categories = [...new Set(myProjects.map((p) => p.category))];

const counts = myProjects.reduce((acc, p) => {
	acc[p.category] = (acc[p.category] || 0) + 1;
	return acc;
}, {});

const AllProjects = ({ maxProjects, filterable = false }) => {
	const [selectedId, setSelectedId] = useState(null);

	// Filters live in the URL (?cat=Game&q=unity) so a filtered view can be shared.
	const [searchParams, setSearchParams] = useSearchParams();
	const rawCategory = searchParams.get("cat") || "";
	const category = categories.find(
		(c) => c.toLowerCase() === rawCategory.toLowerCase()
	) || "";
	const query = searchParams.get("q") || "";

	const updateParam = (key, value) => {
		const next = new URLSearchParams(searchParams);
		if (value) next.set(key, value);
		else next.delete(key);
		setSearchParams(next, { replace: true });
	};

	const clearFilters = () => setSearchParams({}, { replace: true });

	const visible = useMemo(() => {
		if (!filterable) return myProjects;
		const terms = normalize(query).split(/\s+/).filter(Boolean);
		return myProjects.filter(
			(p) =>
				(!category || p.category === category) &&
				terms.every((t) => searchableText(p).includes(t))
		);
	}, [filterable, category, query]);

	const projects =
		maxProjects !== undefined ? visible.slice(0, maxProjects) : visible;

	// Look in the full list so project-to-project links work even when the
	// project is hidden by a filter or not shown on the homepage.
	const selected = myProjects.find((p) => p.id === selectedId);

	return (
		<>
			{filterable && (
				<ProjectFilters
					categories={categories}
					counts={counts}
					category={category}
					query={query}
					onCategoryChange={(v) => updateParam("cat", v)}
					onQueryChange={(v) => updateParam("q", v)}
					total={myProjects.length}
					shown={visible.length}
				/>
			)}

			<div className="all-projects-container">
				{projects.map((project) => (
					<div className="all-projects-project" key={project.id}>
						<Project
							project={project}
							onOpen={() => setSelectedId(project.id)}
						/>
					</div>
				))}

				{filterable && projects.length === 0 && (
					<div className="projects-empty">
						No projects match your search.
						<button type="button" onClick={clearFilters}>
							Clear filters
						</button>
					</div>
				)}

				{selected && (
					<ProjectModal
						project={selected}
						onClose={() => setSelectedId(null)}
						onOpenProject={setSelectedId}
					/>
				)}
			</div>
		</>
	);
};

export default AllProjects;
