import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown, { defaultUrlTransform } from "react-markdown";
import remarkGfm from "remark-gfm";

import CodeBlock from "./codeBlock";
import { slugify } from "../../data/articles";
import { assetUrl } from "../projects/projectCover";

const textOf = (children) =>
	React.Children.toArray(children)
		.map((c) => (typeof c === "string" ? c : textOf(c.props?.children)))
		.join("");

const heading = (Tag) => {
	const Heading = ({ children }) => {
		const id = slugify(textOf(children));
		return (
			<Tag id={id} className="article-heading">
				{children}
				<a href={`#${id}`} className="article-anchor" aria-label="Link to this section">
					#
				</a>
			</Tag>
		);
	};
	return Heading;
};

// ![caption](youtube:ID) embeds a video, anything else is an image/GIF.
const Media = ({ src = "", alt }) => {
	if (src.startsWith("youtube:")) {
		return (
			<figure className="article-media">
				<div className="article-video">
					<iframe
						src={`https://www.youtube-nocookie.com/embed/${src.slice(8)}`}
						title={alt || "Video"}
						loading="lazy"
						allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
						allowFullScreen
					/>
				</div>
				{alt && <figcaption>{alt}</figcaption>}
			</figure>
		);
	}

	const url = /^https?:/.test(src) ? src : assetUrl(src);
	return (
		<figure className="article-media">
			<img src={url} alt={alt || ""} loading="lazy" />
			{alt && <figcaption>{alt}</figcaption>}
		</figure>
	);
};

const components = {
	h2: heading("h2"),
	h3: heading("h3"),

	img: Media,

	// A paragraph holding only an image must not wrap the <figure> in a <p>.
	p: ({ node, children }) =>
		node.children.length === 1 && node.children[0].tagName === "img" ? (
			<>{children}</>
		) : (
			<p>{children}</p>
		),

	a: ({ href = "", children }) => {
		if (href.startsWith("/")) return <Link to={href}>{children}</Link>;
		if (href.startsWith("#")) return <a href={href}>{children}</a>;
		return (
			<a href={href} target="_blank" rel="noreferrer">
				{children}
			</a>
		);
	},

	// Fenced blocks arrive as <pre><code class="language-x">; inline code is left alone.
	pre: ({ node, children }) => {
		const code = Array.isArray(children) ? children[0] : children;
		const language = /language-(\S+)/.exec(code?.props?.className || "")?.[1];
		const meta = node.children[0]?.data?.meta || "";
		const title = /title="([^"]+)"/.exec(meta)?.[1];

		return (
			<CodeBlock
				code={String(code?.props?.children ?? "").replace(/\n$/, "")}
				language={language}
				title={title}
			/>
		);
	},

	table: ({ children }) => (
		<div className="article-table">
			<table>{children}</table>
		</div>
	),
};

const urlTransform = (url) =>
	url.startsWith("youtube:") ? url : defaultUrlTransform(url);

const ArticleBody = ({ content }) => (
	<div className="article-body">
		<ReactMarkdown
			remarkPlugins={[remarkGfm]}
			components={components}
			urlTransform={urlTransform}
		>
			{content}
		</ReactMarkdown>
	</div>
);

export default React.memo(ArticleBody);
