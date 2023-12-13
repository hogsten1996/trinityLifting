// components/ArticleDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import articles from '../articles/articles';

const ArticleById = () => {
  const { articleId } = useParams();
  const article = articles.find((article) => article.id.toString() === articleId);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <p>Author: {article.author}</p>
      <p>{article.description}</p>
      <img src={article.imageUrl} alt={article.title} className="w-full" />
      <p>{article.content}</p>
    </div>
  );
};

export default ArticleById;

