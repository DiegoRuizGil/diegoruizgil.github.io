import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/infoList.css";
import INFO from "../../data/user";

const Works = () => {
	return (
		<div className="works-list">
			<Card
				icon={faBriefcase}
				title="Work experience"
				body = {
					<div className="infoList-body">
						{INFO.works && INFO.works.map(
							(work, id) => (
								<div className="info" onClick={() => window.open(work.url, '_blank')}>
									<img
										height={30}
										src={work.logo}
										alt={`${id}-work`}
										className="info-image"
									/>
									<div className="info-header">
										<div className="info-title">{work.title}</div>
										<div className="info-duration">| {work.timeframe}</div>
									</div>
									<div className="info-subtitle">{work.description}</div>
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
