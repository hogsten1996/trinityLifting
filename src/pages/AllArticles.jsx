import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import articles from '../articles/articles';

const AllArticles = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="max-w-[95%] mx-auto lg:max-w-[80%] mt-6 min-h-screen">
      <h2 className="text-3xl text-center font-extrabold mb-10">All Articles</h2>

      <div className="mb-14 w-[50%] mx-auto">
        <h1 className='text-center text-2xl font-bold mb-3'>Search:</h1>
        <input
          type="text"
          placeholder="Search by title or category..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-400 rounded-xl p-2 w-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {filteredArticles.map((article) => (
          <div key={article.id} className="hover:opacity-80">
            <Link to={`/article/${article.id}`} className="block">
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

export default AllArticles;



