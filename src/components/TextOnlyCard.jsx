
import React from 'react';
import { Link } from 'react-router-dom';

const TextOnlyCard = ({ news }) => {
  const getNewsPath = (news) => {
    return `/article/${news.id}`; 
  };

  return (
    <article className="py-4 border-b border-accent bg-primary transition-colors duration-200">
      <div className="p-0">
        
        <Link to={getNewsPath(news)} className="block focus:outline-none group">
        
          <h2 className="text-lg sm:text-xl md:text-lg font-extrabold leading-snug mb-2 text-secondary group-hover:text-accent group-hover:underline transition-all">
            {news.title}
          </h2>

         
          <p className="text-accent text-sm sm:text-base md:text-sm mb-3 leading-relaxed">
            {news.shortDescription}
          </p>
        </Link>
        
        <div className="flex items-center space-x-2">
          <span className="text-xs sm:text-sm font-medium text-accent">
            {news.publishedDate}
          </span>
          <span className="text-accent text-xs">|</span>
          <span className="text-xs sm:text-sm font-medium text-accent">
          
            {news.subCategory}
          </span>
        </div>
      </div>
    </article>
  );
};

export default TextOnlyCard;