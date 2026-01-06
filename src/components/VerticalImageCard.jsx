
import React from 'react';

const VerticalImageCard = ({ news }) => {
  return (
    <div 
      className="bg-primary rounded-lg my-4  hover:shadow-xl transition-shadow duration-500 overflow-hidden cursor-pointer w-full"
    >
      
      <a href={`/news/${news.id}`}>
        <img 
          className="w-full h-56 xms:h-64 sm:h-72 md:h-80 object-cover" 
          src={news.image} 
          alt={news.title} 
        />
      </a>
      
      
      <div className="p-4 xms:p-5 sm:p-6 md:p-8">
        
      
        <div className="flex items-center mb-2">
          {news.isFeatured && (
             <span className="flex items-center text-red-600 font-bold mr-3 text-sm">
                <span className="mr-1 text-lg">🔴</span>
                LIVE
             </span>
          )}
          <span className="text-xs font-semibold uppercase text-gray-500">
            {news.category}
          </span>
        </div>
    
        <a href={`/news/${news.id}`}>
          <h2 
            className="mb-3 
                       text-xl xms:text-2xl xls:text-3xl sm:text-4xl md:text-5xl 
                       font-extrabold 
                       leading-tight 
                       text-secondary
                       hover:underline transition-colors"
          >
            {news.title}
          </h2>
        </a>
        
        <p 
          className="mb-4 
                     text-base xms:text-lg sm:text-xl 
                     font-normal 
                     text-gray-700 
                     border-b border-gray-200 pb-4"
        >
          {news.shortDescription}
        </p>
        
        <div className="flex justify-between items-center text-xs text-gray-500 mt-2">
            <span>
                Published:{news.publishedDate}
            </span>
            <div className="flex gap-2">
               {news.subCategory}
            </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalImageCard;