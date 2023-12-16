import React from "react";
import { useParams } from "react-router-dom";
import articles from "../articles/articles";

const ArticleById = () => {
  const { articleId } = useParams();
  const article = articles.find(
    (article) => article.id.toString() === articleId
  );

  if (!article) {
    return (
      <div className="text-center mt-8 text-gray-700">Article not found</div>
    );
  }

  return (
    <div className="w-[95%] lg:w-[60%] mx-auto mt-8 bg-white rounded-md shadow-md">
      <h2 className="text-3xl font-bold mb-4">{article.title}</h2>
      <p className="text-sm text-gray-500 mb-2">Author: {article.author}</p>
      <img
        src={article.imageUrl}
        alt={article.title}
        className="w-full h-[300px] lg:h-[600px] object-cover mb-4"
      />

      {article.sections.map((section, index) => (
        <div key={index} className="mb-4">
          {section.type === "section" && (
            <p className="text-xl font-bold mb-2">{section.content}</p>
          )}
          {section.type === "paragraph" && (
            <p className="text-md text-gray-700 mb-2">{section.content}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ArticleById;
