
import React from 'react';
import { Link } from 'react-router-dom';

const CoverImageCard = ({ news }) => {
  const getNewsPath = (news) => {
    return `/article/${news.id}`; 
  };

  return (
    <div className="max-w-xs  sm:max-w-sm md:max-w-md my-4 mx-auto  border-b border-accent overflow-hidden bg-primary hover:shadow-xl transition-shadow duration-300">
      <div to={getNewsPath(news)} className="block focus:outline-none group">
        
        <div className="relative overflow-hidden h-48 sm:h-56 md:h-64">
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </div>

        <div className="p-4 md:p-5">
          
          <Link to={getNewsPath(news)} className="text-md sm:text-2xl font-extrabold leading-tight mb-2 text-secondary hover:underline transition-colors">
            {news.title}
          </Link>

          <p className="text-accent text-sm sm:text-base mb-3 leading-relaxed">
            {news.shortDescription}
          </p>

          <div className="flex items-center space-x-2 pt-2 border-t border-gray-100">
            <span className="text-sm font-medium text-accent">
              {news.publishedDate}
            </span>
            <span className="text-accent">|</span>
            <span className="text-sm font-medium text-accent">
              {Array.isArray(news.subCategory) ? news.subCategory[0] : news.category} 
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverImageCard;