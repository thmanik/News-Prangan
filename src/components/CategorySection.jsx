import React from 'react';
import SideImageCard from './SideImageCard'; 

const CategorySection = ({ title, allNewsItems }) => {
    
    const slicedNews = allNewsItems.slice(0, 5); 
    
    if (slicedNews.length === 0) {
        return null;
    }

    return (
        <div className="my-10">
            
            <div className="flex justify-start items-center mb-6 border-b border-accent pb-2">
                
                <h2 className="text-3xl font-bold text-secondary border-l-4 border-accent pl-3">
                    {title}
                </h2>
                
            </div>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
                {slicedNews.map(item => (
                    <div key={item.id} className="col-span-1">
                        <SideImageCard news={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategorySection;