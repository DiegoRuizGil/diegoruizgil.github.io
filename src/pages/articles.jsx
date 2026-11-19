import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import ArticleCard from "../components/articles/articleCard";

import { getArticles } from "../data/articles";
import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";
import "./styles/articles.css";

const Articles = () => {
	const [articles, setArticles] = useState(null);

	useEffect(() => {
		window.scrollTo(0, 0);
		getArticles().then(setArticles);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "articles");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Articles | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar active="articles" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							Notes on the things I build and learn.
						</div>

						<div className="subtitle projects-subtitle">
							<p>
								Step-by-step write-ups of projects I’ve made and topics I’m
								exploring: how things work, the decisions behind them, and what
								I learned along the way.
							</p>
						</div>

						<div className="articles-list">
							{articles === null && (
								<div className="articles-empty">Loading…</div>
							)}
							{articles?.length === 0 && (
								<div className="articles-empty articles-empty-box">
									<div className="articles-empty-icon">✍️</div>
									<div className="articles-empty-title">
										My first article is on its way
									</div>
									<p>
										I’m working on a step-by-step write-up of my current Unity
										project. Check back soon, or take a look at my{" "}
										<Link to="/projects">projects</Link> in the meantime.
									</p>
								</div>
							)}
							{articles?.map((article) => (
								<ArticleCard key={article.slug} article={article} />
							))}
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Articles;
