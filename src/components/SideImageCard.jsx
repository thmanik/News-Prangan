
import React from 'react';
import { Link } from 'react-router-dom';

const SideImageCard = ({ news }) => {
  const getNewsPath = (news) => {
    return `/article/${news.id}`; 
  };

  return (
    <article className="py-4 border-b border-accent bg-primary transition-colors duration-200">
      <div className="flex flex-row-reverse items-start space-x-4 sm:space-x-6">
        
        <div className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 overflow-hidden rounded-md">
          <Link to={getNewsPath(news)} className="block">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-full object-cover"
            />
          </Link>
        </div>

        <div className="flex-grow min-w-0">
          <Link to={getNewsPath(news)} className="block focus:outline-none group">
            
            <h2 className="text-base sm:text-lg md:text-xl font-bold leading-tight mb-2 text-secondary  hover:underline transition-all">
              {news.title}
            </h2>

            <p className=" text-accent text-sm leading-relaxed mb-3">
              {news.shortDescription}
            </p>
          </Link>
          
          <div className="flex items-center space-x-2">
            <span className="text-xs sm:text-sm font-medium text-accent">
              {news.publishedDate}
            </span>
            <span className="text-accent text-xs">|</span>
            <span className="text-xs sm:text-sm font-medium text-accent">
              {Array.isArray(news.subCategory) ? news.subCategory[0] : news.category} 
            </span>
          </div>
        </div>

      </div>
    </article>
  );
};

export default SideImageCard;