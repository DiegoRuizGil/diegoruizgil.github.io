// Every article is a Markdown file in this folder: `my-article.md`.
// The file name is the URL slug (/articles/my-article). There is nothing to
// register: any `.md` file added here shows up in the Articles page.
//
// Each file starts with a front matter block:
//
//   ---
//   title: Stylized water shader in Unity
//   date: 2026-12-02
//   summary: One or two sentences shown in the article list.
//   tags: [Unity, Shaders, HLSL]
//   cover: articles/water/cover.png      (optional, path inside /public)
//   draft: true                          (optional, hidden in the deployed site)
//   ---
//
// Then plain Markdown. On top of the usual syntax:
//   ## / ###                  become the table of contents (keep titles unique)
//   ```hlsl title="Water.shader"   fenced code with highlighting + optional title
//   ![Caption](/articles/slug/image.png)   image or GIF with caption (from /public)
//   ![Caption](youtube:VIDEO_ID)           embedded YouTube video

const context = require.context("./", false, /\.md$/);

const stripInline = (text) =>
	text
		.replace(/!?\[([^\]]*)\]\([^)]*\)/g, "$1")
		.replace(/[*_`]/g, "")
		.trim();

export const slugify = (text) =>
	stripInline(text)
		.toLowerCase()
		.normalize("NFD")
		.replace(/[̀-ͯ]/g, "")
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "");

const parseValue = (value) => {
	const v = value.trim();
	if (v.startsWith("[") && v.endsWith("]")) {
		return v
			.slice(1, -1)
			.split(",")
			.map((s) => s.trim().replace(/^["']|["']$/g, ""))
			.filter(Boolean);
	}
	if (v === "true") return true;
	if (v === "false") return false;
	return v.replace(/^["']|["']$/g, "");
};

const extractHeadings = (content) => {
	const headings = [];
	const used = {};
	let inFence = false;

	content.split(/\r?\n/).forEach((line) => {
		if (/^\s*```/.test(line)) inFence = !inFence;
		if (inFence) return;

		const match = line.match(/^(#{2,3})\s+(.+?)(?:\s+#+)?\s*$/);
		if (!match) return;

		const text = stripInline(match[2]);
		let id = slugify(text);
		used[id] = (used[id] || 0) + 1;
		if (used[id] > 1) id = `${id}-${used[id]}`;
		headings.push({ level: match[1].length, text, id });
	});

	return headings;
};

export const parseArticle = (raw, slug) => {
	const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
	const data = {};
	let content = raw;

	if (match) {
		content = match[2];
		match[1].split(/\r?\n/).forEach((line) => {
			const i = line.indexOf(":");
			if (i > 0) data[line.slice(0, i).trim()] = parseValue(line.slice(i + 1));
		});
	}

	const words = content.split(/\s+/).filter(Boolean).length;

	return {
		slug,
		title: data.title || slug,
		date: data.date || "",
		summary: data.summary || "",
		tags: data.tags || [],
		cover: data.cover || null,
		draft: data.draft === true,
		readingTime: Math.max(1, Math.round(words / 200)),
		headings: extractHeadings(content),
		content,
	};
};

const cache = {};

const load = (key) => {
	if (!cache[key]) {
		const mod = context(key);
		const url = typeof mod === "string" ? mod : mod.default;
		cache[key] = fetch(url)
			.then((res) => res.text())
			.then((raw) => parseArticle(raw, key.replace(/^\.\//, "").replace(/\.md$/, "")));
	}
	return cache[key];
};

const isVisible = (article) =>
	!article.draft || process.env.NODE_ENV !== "production";

export const getArticles = () =>
	Promise.all(context.keys().map(load)).then((all) =>
		all.filter(isVisible).sort((a, b) => (a.date < b.date ? 1 : -1))
	);

export const getArticle = (slug) => {
	const key = `./${slug}.md`;
	if (!context.keys().includes(key)) return Promise.resolve(null);
	return load(key).then((article) => (isVisible(article) ? article : null));
};
