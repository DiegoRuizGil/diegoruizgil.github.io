// Every project lives in its own JSON file in this folder.
// To add a project: create `my-project.json` (copy any existing one),
// import it below and add it to the list. The list order is the display order.
//
// Fields (all optional except title/tagline/category):
//   title, tagline, category ("Game" | "Tool" | "Backend"), year, role,
//   banner (path inside /public, or null for an automatic cover),
//   stack: [..], links: [{ label, url, type }],
//   overview: [paragraphs], highlights: [{ icon, title, text }],
//   decisions: [{ title, text }], contributions: [..], limitations: [..],
//   learnings: [..], media: [{ type: "youtube", id, caption } | { type: "image", src, caption }]
//
// Text supports **bold**, `code` and [links](https://...).
// A link like [PokeTool](#poketool) opens that project (the id is the file name).

import pokemonBattleClone from "./pokemon-battle-clone.json";
import poketool from "./poketool.json";
import cookieClickerClone from "./cookie-clicker-clone.json";
import asyncCsvProcessor from "./asynccsvprocessor.json";
import gameloggr from "./gameloggr.json";
import godai from "./godai.json";
import tacticsWars from "./tactics-wars.json";
import soGameEvents from "./so-game-events.json";
import globalVariables from "./global-variables.json";
import characterController from "./character-controller.json";
import pathfinding from "./pathfinding.json";

const myProjects = [
	{ id: "pokemon-battle-clone", ...pokemonBattleClone },
	{ id: "poketool", ...poketool },
	{ id: "cookie-clicker-clone", ...cookieClickerClone },
	{ id: "asynccsvprocessor", ...asyncCsvProcessor },
	{ id: "gameloggr", ...gameloggr },
	{ id: "godai", ...godai },
	{ id: "tactics-wars", ...tacticsWars },
	{ id: "so-game-events", ...soGameEvents },
	{ id: "global-variables", ...globalVariables },
	{ id: "character-controller", ...characterController },
	{ id: "pathfinding", ...pathfinding },
];

export default myProjects;
