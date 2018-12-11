import React from "react";
import ArticleMagazineComment from "@times-components/article-magazine-comment";
import ArticleMagazineStandard from "@times-components/article-magazine-standard";
import ArticleMainStandard from "@times-components/article-main-standard";
import ArticleMainComment from "@times-components/article-main-comment";
import ArticleMagazineDepth from "@times-components/article-magazine-in-depth";

export const templates = {
  magazinecomment: ArticleMagazineComment,
  magazineindepth: ArticleMagazineDepth,
  magazinestandard: ArticleMagazineStandard,
  maincomment: ArticleMainComment,
  mainstandard: ArticleMainStandard
};

const Article = props => {
  const { article } = props;
  const { template = "mainstandard" } = article || {};

  const Component = templates[template] || ArticleMainStandard;
  return <Component {...props} />;
};

export default Article;
