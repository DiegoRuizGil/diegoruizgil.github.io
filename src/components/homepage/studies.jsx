import React from "react";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/infoList.css";
import INFO from "../../data/user";

const Studies = () => {
	return (
		<div className="studies-list">
			<Card
				icon={faGraduationCap}
				title="Studies"
				body = {
					<div className="infoList-body">
						{INFO.studies && INFO.studies.map(
							(study, id) => (
								<div className="info">
									<img
										height={30}
										src={study.logo}
										alt={`${id}-study`}
										className="info-image"
									/>
									<div className="info-content">
										<div className="info-header">
											<div className="info-title">{study.title}</div>
											<div className="info-duration">| {study.timeframe}</div>
										</div>
										<div className="info-subtitle">{study.institution}</div>
									</div>
								</div>
							)
						)}
					</div>
				}
			/>
		</div>
	);
};

export default Studies;
