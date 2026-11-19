import React from "react";

import "./styles/projectFilters.css";

const ProjectFilters = ({
	categories,
	counts,
	category,
	query,
	onCategoryChange,
	onQueryChange,
	total,
	shown,
}) => {
	return (
		<div className="project-filters">
			<div className="project-filters-search">
				<input
					type="search"
					className="project-filters-input"
					placeholder="Search by title, description or technology…"
					aria-label="Search projects"
					value={query}
					onChange={(e) => onQueryChange(e.target.value)}
				/>
			</div>

			<div
				className="project-filters-chips"
				role="group"
				aria-label="Filter by category"
			>
				{["All", ...categories].map((name) => {
					const value = name === "All" ? "" : name;
					const active = category === value;
					const count = name === "All" ? total : counts[name];

					return (
						<button
							type="button"
							key={name}
							className={`filter-chip ${active ? "filter-chip-active" : ""}`}
							aria-pressed={active}
							onClick={() => onCategoryChange(value)}
						>
							{name} <span className="filter-chip-count">{count}</span>
						</button>
					);
				})}
			</div>

			<div className="project-filters-result" aria-live="polite">
				Showing {shown} of {total} projects
			</div>
		</div>
	);
};

export default ProjectFilters;
