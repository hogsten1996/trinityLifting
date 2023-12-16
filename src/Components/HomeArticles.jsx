import React from "react";
import { Link } from "react-router-dom";
import articles from "../articles/articles";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const HomeArticles = () => {
  const featuredArticles = articles.slice(0, 4);

  return (
    <div className="max-w-[95%] mx-auto lg:max-w-[80%] my-16">
      <h2 className="text-3xl font-extrabold mb-2">Featured Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {featuredArticles.map((article) => (
          <div key={article.id} className="hover:opacity-80">
            <Link to={`/article/${article.id}`} onClick={scrollToTop}>
              <h3 className="text-xl font-bold">{article.title}</h3>
              <p className="text-sm font-extrabold text-red-700 mb-1">Author: {article.author}</p>
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full object-cover h-[200px]"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeArticles;
