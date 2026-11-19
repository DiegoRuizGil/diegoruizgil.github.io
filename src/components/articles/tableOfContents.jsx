import React, { useEffect, useState } from "react";

const TableOfContents = ({ headings }) => {
	const [active, setActive] = useState("");

	// Highlight the section currently near the top of the viewport.
	useEffect(() => {
		const elements = headings
			.map((h) => document.getElementById(h.id))
			.filter(Boolean);
		if (elements.length === 0) return undefined;

		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries.find((e) => e.isIntersecting);
				if (visible) setActive(visible.target.id);
			},
			{ rootMargin: "-80px 0px -70% 0px" }
		);

		elements.forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	}, [headings]);

	if (headings.length < 2) return null;

	return (
		<nav className="article-toc" aria-label="Table of contents">
			<div className="article-toc-title">On this page</div>
			<ul>
				{headings.map((h) => (
					<li key={h.id} className={`toc-level-${h.level}`}>
						<a
							href={`#${h.id}`}
							className={active === h.id ? "toc-active" : ""}
						>
							{h.text}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default TableOfContents;
