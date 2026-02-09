import React from "react";
import { Link } from "react-router-dom";

import "./styles/project.css";

const Project = (props) => {
	const { title, description, banner } = props;

	return (
		<React.Fragment>
			<div className="project">
				<Link>
					<div className="project-banner">
						<img src={banner} alt="banner" />
					</div>
					<div className="project-container">
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;
