import React, { useMemo, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-glsl";
import "prismjs/components/prism-hlsl";
import "prismjs/components/prism-json";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-yaml";

// Short names people actually type in fences.
const ALIASES = { cs: "csharp", sh: "bash", shell: "bash", html: "markup", js: "javascript" };

const CodeBlock = ({ code, language, title }) => {
	const [copied, setCopied] = useState(false);

	const lang = ALIASES[language] || language;
	const html = useMemo(() => {
		const grammar = Prism.languages[lang];
		return grammar ? Prism.highlight(code, grammar, lang) : null;
	}, [code, lang]);

	const copy = async () => {
		try {
			await navigator.clipboard.writeText(code);
			setCopied(true);
			setTimeout(() => setCopied(false), 1500);
		} catch (e) {
			// Clipboard not available (insecure context): nothing to do.
		}
	};

	return (
		<div className="code-block">
			<div className="code-block-header">
				<span className="code-block-title">{title || language || "code"}</span>
				<button type="button" className="code-block-copy" onClick={copy}>
					{copied ? "Copied" : "Copy"}
				</button>
			</div>
			<pre>
				{html ? (
					<code
						className={`language-${lang}`}
						dangerouslySetInnerHTML={{ __html: html }}
					/>
				) : (
					<code>{code}</code>
				)}
			</pre>
		</div>
	);
};

export default CodeBlock;
