import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";
import INFO from "../../data/user";

const Works = () => {
	return (
		<div className="works-list">
			<Card
				icon={faBriefcase}
				title="Work experience"
				body = {
					<div className="works-body">
						{INFO.works && INFO.works.map(
							(work, id) => (
								<div className="work" onClick={() => window.open(work.url, '_blank')}>
									<img
										height={30}
										src={work.logo}
										alt={`${id}-work`}
										className="work-image"
									/>
									<div className="work-header">
										<div className="work-title">{work.title}</div>
										<div className="work-duration">| {work.timeframe}</div>
									</div>
									<div className="work-subtitle">{work.description}</div>
								</div>
							)
						)}
					</div>
				}
			/>
		</div>
	);
};

export default Works;
