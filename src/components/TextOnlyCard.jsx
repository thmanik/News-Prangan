import React from 'react';
import { Link } from 'react-router-dom';

const TextOnlyCard = ({ news }) => {
  const getNewsPath = (news) => {
    return `/newsDetails/${news.id}`; 
  };

  return (
  
    <Link 
      to={getNewsPath(news)} 
      className="block py-2 md:py-4 bg-primary transition-colors duration-500 group  focus:outline-none"
    >
      <div className="p-0">
        
      
        <div> 
        
          <h2 className="sm:text-xl md:text-lg font-bold leading-snug mb-2 text-secondary group-hover:text-accent group-hover:underline transition-all">
            {news.title}
          </h2>

          
          <p className="text-accent text-sm leading-relaxed mb-2">
            {news.shortDescription}
          </p>
        </div>
        
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
    </Link>
  );
};

export default TextOnlyCard;