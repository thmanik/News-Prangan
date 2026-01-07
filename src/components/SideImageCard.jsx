import React from 'react';
import { Link } from 'react-router-dom';

const SideImageCard = ({ news }) => {
  const getNewsPath = (news) => {
    return `/newsDetails/${news.id}`; 
  };
  const articlePath = getNewsPath(news);
  
  
  return (
    <Link 
      to={articlePath} 
      className="block py-4 border-b border-accent bg-primary transition-colors duration-200 group focus:outline-none"
    >
      <div className="flex flex-col">
      
        <div className="flex items-start space-x-4">
          
          <div className="flex-grow ">
            <h2 className="text-base sm:text-sm md:text-md font-bold leading-tight text-secondary  group-hover:underline transition-all">
              {news.title}
            </h2>
          </div>

          
          <div className="flex-shrink-0 w-24 h-20 sm:w-18 sm:h-18 overflow-hidden ">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        
        <div>
          <p className="text-accent text-sm leading-relaxed mb-2">
            {news.shortDescription}
          </p>
          
          <div className="flex items-center space-x-2">
            <span className="text-xs font-medium text-accent">
              {news.publishedDate}
            </span>
            <span className="text-accent text-sm">|</span>
            <span className="text-xs font-medium text-accent">
              {news.category} 
            </span>
          </div>
        </div>

      </div>
    </Link>
  );
};

export default SideImageCard;