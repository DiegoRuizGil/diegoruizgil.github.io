import React from "react";

const ICONS = { Game: "🎮", Tool: "🛠️", Backend: "⚙️" };

export const assetUrl = (path) =>
	path ? `${process.env.PUBLIC_URL}/${path.replace(/^\.?\//, "")}` : null;

// Shows the project banner, or a gradient cover when there is no image yet.
const ProjectCover = ({ project, className = "" }) => {
	const { banner, category, title } = project;

	if (banner) {
		return (
			<div className={`cover ${className}`}>
				<img src={assetUrl(banner)} alt={`${title} banner`} loading="lazy" />
			</div>
		);
	}

	return (
		<div
			className={`cover cover-fallback cover-${(category || "game").toLowerCase()} ${className}`}
			aria-hidden="true"
		>
			<span>{ICONS[category] || "📁"}</span>
		</div>
	);
};

export default ProjectCover;
