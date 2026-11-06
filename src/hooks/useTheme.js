import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme";

const getInitialTheme = () => {
	const applied = document.documentElement.getAttribute("data-theme");
	if (applied === "dark" || applied === "light") return applied;
	return window.matchMedia?.("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light";
};

// Keeps <html data-theme="..."> and localStorage in sync.
// Every component that calls this shares the same source of truth (the DOM
// attribute), so the toggle stays consistent across pages.
const useTheme = () => {
	const [theme, setTheme] = useState(getInitialTheme);

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
		try {
			localStorage.setItem(STORAGE_KEY, theme);
		} catch (e) {
			/* storage may be unavailable (private mode) */
		}
	}, [theme]);

	const toggleTheme = useCallback(
		() => setTheme((t) => (t === "dark" ? "light" : "dark")),
		[]
	);

	return { theme, toggleTheme };
};

export default useTheme;
