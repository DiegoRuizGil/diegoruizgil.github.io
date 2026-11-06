import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowUpRightFromSquare,
	faPlay,
	faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faItchIo } from "@fortawesome/free-brands-svg-icons";

import ProjectCover, { assetUrl } from "./projectCover";
import RichText from "./richText";

import "./styles/projectModal.css";

const LINK_ICONS = {
	github: faGithub,
	itch: faItchIo,
	video: faPlay,
	demo: faArrowUpRightFromSquare,
};

const Section = ({ title, children }) => (
	<section className="pm-section">
		<h3 className="pm-section-title">{title}</h3>
		{children}
	</section>
);

const Media = ({ item, title }) => {
	if (item.type === "youtube") {
		return (
			<figure className="pm-media">
				<div className="pm-video">
					<iframe
						src={`https://www.youtube-nocookie.com/embed/${item.id}`}
						title={item.caption || `${title} video`}
						loading="lazy"
						allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
						allowFullScreen
					/>
				</div>
				{item.caption && <figcaption>{item.caption}</figcaption>}
			</figure>
		);
	}
	return (
		<figure className="pm-media">
			<img src={assetUrl(item.src)} alt={item.caption || title} loading="lazy" />
			{item.caption && <figcaption>{item.caption}</figcaption>}
		</figure>
	);
};

const ProjectModal = ({ project, onClose, onOpenProject }) => {
	const scrollRef = useRef(null);
	const {
		id,
		title,
		tagline,
		category,
		year,
		role,
		stack = [],
		links = [],
		overview = [],
		highlights = [],
		decisions = [],
		contributions = [],
		limitations = [],
		learnings = [],
		media = [],
	} = project;

	// Lock page scroll while the modal is open.
	useEffect(() => {
		const scrollY = window.scrollY;
		const body = document.body;
		Object.assign(body.style, {
			position: "fixed",
			top: `-${scrollY}px`,
			left: "0",
			right: "0",
			width: "100%",
		});
		return () => {
			Object.assign(body.style, {
				position: "",
				top: "",
				left: "",
				right: "",
				width: "",
			});
			window.scrollTo(0, scrollY);
		};
	}, []);

	// Close with Escape.
	useEffect(() => {
		const onKey = (e) => e.key === "Escape" && onClose();
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [onClose]);

	// When jumping to another project, start at the top.
	useEffect(() => {
		scrollRef.current?.scrollTo(0, 0);
	}, [id]);

	const rich = (text) => <RichText text={text} onProjectLink={onOpenProject} />;

	return (
		<div className="modal-overlay" onClick={onClose}>
			<div
				className="modal"
				role="dialog"
				aria-modal="true"
				aria-label={title}
				ref={scrollRef}
				onClick={(e) => e.stopPropagation()}
			>
				<button
					type="button"
					className="modal-close"
					onClick={onClose}
					aria-label="Close"
				>
					<FontAwesomeIcon icon={faXmark} />
				</button>

				<ProjectCover project={project} className="modal-cover" />

				<div className="modal-content">
					<div className="pm-meta">
						<span className={`chip chip-${(category || "").toLowerCase()}`}>
							{category}
						</span>
						{year && <span className="pm-meta-item">{year}</span>}
						{role && <span className="pm-meta-item">{role}</span>}
					</div>

					<h2 className="modal-title">{title}</h2>
					<p className="modal-tagline">{tagline}</p>

					{links.length > 0 && (
						<div className="pm-links">
							{links.map((link) => (
								<a
									key={link.url}
									className="pm-link"
									href={link.url}
									target="_blank"
									rel="noreferrer"
								>
									<FontAwesomeIcon
										icon={LINK_ICONS[link.type] || faArrowUpRightFromSquare}
									/>
									{link.label}
								</a>
							))}
						</div>
					)}

					{stack.length > 0 && (
						<div className="pm-stack">
							{stack.map((tag) => (
								<span className="tag" key={tag}>
									{tag}
								</span>
							))}
						</div>
					)}

					{overview.length > 0 && (
						<Section title="Overview">
							{overview.map((p, i) => (
								<p className="pm-text" key={i}>
									{rich(p)}
								</p>
							))}
						</Section>
					)}

					{media.length > 0 && (
						<Section title="See it in action">
							<div className="pm-media-list">
								{media.map((item, i) => (
									<Media key={i} item={item} title={title} />
								))}
							</div>
						</Section>
					)}

					{highlights.length > 0 && (
						<Section title="Highlights">
							<div className="pm-highlights">
								{highlights.map((h) => (
									<div className="pm-highlight" key={h.title}>
										<div className="pm-highlight-icon">{h.icon}</div>
										<div>
											<div className="pm-highlight-title">{h.title}</div>
											<div className="pm-highlight-text">{rich(h.text)}</div>
										</div>
									</div>
								))}
							</div>
						</Section>
					)}

					{contributions.length > 0 && (
						<Section title="What I built">
							<ul className="pm-list">
								{contributions.map((c, i) => (
									<li key={i}>{rich(c)}</li>
								))}
							</ul>
						</Section>
					)}

					{decisions.length > 0 && (
						<Section title="Technical decisions">
							<ul className="pm-decisions">
								{decisions.map((d) => (
									<li key={d.title}>
										<div className="pm-decision-title">{d.title}</div>
										<div className="pm-text">{rich(d.text)}</div>
									</li>
								))}
							</ul>
						</Section>
					)}

					{limitations.length > 0 && (
						<Section title="Not done yet">
							<ul className="pm-list">
								{limitations.map((l, i) => (
									<li key={i}>{rich(l)}</li>
								))}
							</ul>
						</Section>
					)}

					{learnings.length > 0 && (
						<Section title="What I learned">
							<ul className="pm-list">
								{learnings.map((l, i) => (
									<li key={i}>{rich(l)}</li>
								))}
							</ul>
						</Section>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectModal;
