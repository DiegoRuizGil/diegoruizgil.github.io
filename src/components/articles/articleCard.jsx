import React from "react";
import { Link } from "react-router-dom";

import { assetUrl } from "../projects/projectCover";

import "./styles/articleCard.css";

export const formatDate = (date) => {
	const d = new Date(`${date}T00:00:00`);
	return Number.isNaN(d.getTime())
		? date
		: d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
};

const ArticleCard = ({ article }) => {
	const { slug, title, summary, date, tags, cover, readingTime, draft } = article;

	return (
		<Link to={`/articles/${slug}`} className="article-card">
			<div className="cover article-card-cover">
				{cover ? (
					<img src={assetUrl(cover)} alt="" loading="lazy" />
				) : (
					<div className="cover-fallback cover-game article-card-fallback">📝</div>
				)}
			</div>
			<div className="article-card-content">
				<div className="article-card-meta">
					{formatDate(date)} · {readingTime} min read
					{draft && <span className="article-draft">Draft</span>}
				</div>
				<div className="article-card-title">{title}</div>
				<div className="article-card-summary">{summary}</div>
				<div className="article-card-tags">
					{tags.map((tag) => (
						<span className="tag" key={tag}>
							{tag}
						</span>
					))}
				</div>
			</div>
		</Link>
	);
};

export default ArticleCard;
