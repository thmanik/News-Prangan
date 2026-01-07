
import React from 'react';
import { Link } from 'react-router-dom';

const VerticalImageCard = ({ news }) => {

  const getNewsPath = (news) => {
    return `/newsDetails/${news.id}`;
  };

  const articlePath = getNewsPath(news);

  return (
    <Link
      to={articlePath}
      className="bg-primary my-4 hover:shadow-sm transition-shadow duration-500 overflow-hidden w-full block group"
    >

      <div>
        <img
          className="w-full h-56 xms:h-64 sm:h-72 md:h-80 object-cover"
          src={news.image}
          alt={news.title}
        />
      </div>

      <div className="p-4 xms:p-5 sm:p-6 md:p-8">

        <div className="flex items-center mb-2">
          {news.isFeatured && (
            <span className="flex items-center text-red-600 font-bold mr-3 text-sm">
              <span className="mr-1 text-lg">🔴</span>
              LIVE
            </span>
          )}
          <span className="text-xs font-semibold uppercase text-accent">
            {news.category}
          </span>
        </div>

        <h2
          className="mb-3 
                        text-md xms:text-md xls:text-xl sm:text-2xl md:text-3xl 
                        font-extrabold 
                        leading-tight 
                        text-secondary
                        group-hover:underline  transition-colors"
        >
          {news.title}
        </h2>

        <p
          className="text-accent text-sm leading-relaxed mb-2
                        border-b border-accent/50 pb-4"
        >
          {news.shortDescription}
        </p>

        <div className="flex justify-between items-center text-xs text-accent mt-2">
          <span>
            Published: {news.publishedDate}
          </span>
          <div className="flex gap-2">
            {Array.isArray(news.subCategory) ? news.subCategory.join(' | ') : news.subCategory}
          </div>
        </div>
      </div>

    </Link>
  );
};

export default VerticalImageCard;