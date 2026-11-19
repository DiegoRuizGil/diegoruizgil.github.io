import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faItchIo,
	faLinkedin,
	faBluesky
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Works from "../components/homepage/works";
import Studies from "../components/homepage/studies";
import AllProjects from "../components/projects/allProjects";
import ViewMoreButton from "../components/common/viewMoreButton";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/homepage.css";

// Scroll distance (px) over which the logo shrinks from 80px to the nav size.
const LOGO_DOCK_SCROLL = 100;

const Homepage = () => {
	const logoRef = useRef(null);
	const [docked, setDocked] = useState(false);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// The logo is always `position: fixed`. Its size and position are derived
	// from the scroll offset in CSS (see homepage.css), so it can never get
	// stuck in an intermediate state, even after a fast scroll or a reload in
	// the middle of the page. Here we only publish the scroll value and flag
	// when the logo has reached the nav bar.
	useEffect(() => {
		const update = () => {
			const scroll = Math.max(0, window.scrollY);
			logoRef.current?.style.setProperty("--logo-scroll", scroll);
			setDocked(scroll >= LOGO_DOCK_SCROLL);
		};

		update();
		window.addEventListener("scroll", update, { passive: true });
		return () => window.removeEventListener("scroll", update);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "home");

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div
							ref={logoRef}
							className={`header-logo home-logo ${docked ? "is-docked" : ""}`}
						>
							<Logo link={false} />
						</div>
					</div>

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									{INFO.homepage.title}
								</div>

								<div className="subtitle homepage-subtitle">
									{INFO.homepage.description}
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src="homepage.jpg"
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="homepage-socials">
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faLinkedin}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.itchio}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faItchIo}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.bsky}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faBluesky}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className="homepage-social-icon"
								/>
							</a>
						</div>

						<div className="homepage-projects">
							<AllProjects maxProjects={3}/>
							<ViewMoreButton section={"projects"} />
						</div>

						<div className="homepage-works">
							<Works />
						</div>

						<div className="homepage-studies">
							<Studies />
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
