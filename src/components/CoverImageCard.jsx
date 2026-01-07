
import React from 'react';
import { Link } from 'react-router-dom';

const CoverImageCard = ({ news }) => {
  const getNewsPath = (news) => {
    return `/newsDetails/${news.id}`; 
  };
  const articlePath = getNewsPath(news);

  return (
    <Link 
      to={articlePath} 
      className="max-w-xs sm:max-w-sm md:max-w-md my-4 mx-auto  overflow-hidden bg-primary hover:shadow-sm  transition-shadow duration-500 block group"
    >
        
        <div className="relative overflow-hidden h-48 sm:h-56 md:h-64">
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </div>

        <div className="p-2">
          
          <h2 className="text-md sm:text-md  font-bold leading-tight mb-2 text-secondary group-hover:underline transition-colors">
            {news.title}
          </h2>

          <p className="text-accent text-sm leading-relaxed mb-2">
            {news.shortDescription}
          </p>

          <div className="flex items-center  space-x-2 pt-2 border-t border-accent/50">
            <span className="text-sm font-medium text-accent">
              {news.publishedDate}
            </span>
            <span className="text-accent">|</span>
            <span className="text-sm font-medium text-accent">
              {news.category} 
            </span>
          </div>
        </div>
    </Link>
  );
};

export default CoverImageCard;