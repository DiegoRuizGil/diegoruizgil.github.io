import React from "react";

// Minimal inline formatter so project text can live in plain JSON:
//   **bold**   `code`   [label](https://url)   [label](#project-id)
const TOKEN = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;

const RichText = ({ text, onProjectLink }) => {
	if (!text) return null;

	const parts = text.split(TOKEN).filter(Boolean);

	return (
		<>
			{parts.map((part, i) => {
				if (part.startsWith("**") && part.endsWith("**")) {
					return <strong key={i}>{part.slice(2, -2)}</strong>;
				}
				if (part.startsWith("`") && part.endsWith("`")) {
					return <code key={i}>{part.slice(1, -1)}</code>;
				}
				const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
				if (link) {
					const [, label, href] = link;
					if (href.startsWith("#")) {
						return (
							<button
								key={i}
								type="button"
								className="rich-link"
								onClick={() => onProjectLink?.(href.slice(1))}
							>
								{label}
							</button>
						);
					}
					return (
						<a key={i} href={href} target="_blank" rel="noreferrer">
							{label}
						</a>
					);
				}
				return <React.Fragment key={i}>{part}</React.Fragment>;
			})}
		</>
	);
};

export default RichText;
