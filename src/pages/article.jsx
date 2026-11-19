import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import ArticleBody from "../components/articles/articleBody";
import TableOfContents from "../components/articles/tableOfContents";
import { formatDate } from "../components/articles/articleCard";
import { assetUrl } from "../components/projects/projectCover";
import Notfound from "./404";

import { getArticle } from "../data/articles";
import INFO from "../data/user";

import "./styles/projects.css";
import "../components/articles/styles/article.css";

const Article = () => {
	const { slug } = useParams();
	const [article, setArticle] = useState(undefined); // undefined = loading, null = missing

	useEffect(() => {
		setArticle(undefined);
		window.scrollTo(0, 0);
		getArticle(slug).then(setArticle);
	}, [slug]);

	if (article === null) return <Notfound />;

	return (
		<React.Fragment>
			{article && (
				<Helmet>
					<title>{`${article.title} | ${INFO.main.title}`}</title>
					<meta name="description" content={article.summary} />
					<meta name="keywords" content={article.tags.join(", ")} />
				</Helmet>
			)}

			<div className="page-content">
				<NavBar active="articles" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="article-page">
						<Link to="/articles" className="article-back">
							← All articles
						</Link>

						{article === undefined && <p>Loading…</p>}

						{article && (
							<React.Fragment>
								<header className="article-header">
									<div className="article-header-tags">
										{article.tags.map((tag) => (
											<span className="tag" key={tag}>
												{tag}
											</span>
										))}
									</div>
									<h1 className="article-title">{article.title}</h1>
									{article.summary && (
										<p className="article-summary">{article.summary}</p>
									)}
									<div className="article-meta">
										{formatDate(article.date)} · {article.readingTime} min read
									</div>
								</header>

								{article.cover && (
									<div className="article-cover">
										<img src={assetUrl(article.cover)} alt="" />
									</div>
								)}

								<div className="article-layout">
									<TableOfContents headings={article.headings} />
									<ArticleBody content={article.content} />
								</div>
							</React.Fragment>
						)}
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Article;
