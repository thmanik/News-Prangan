import React from 'react';
import SideImageCard from './SideImageCard';
import { Link } from 'react-router-dom';

const CategorySection = ({ sectionHeading, allNewsItems }) => {
    const categoryName = allNewsItems.length > 0 ? allNewsItems[0].category : '';
    const getNewsPath = () => {
        return `/${categoryName.toLowerCase()}`;
    };
    const articlePath = getNewsPath();

    const slicedNews = allNewsItems.slice(0, 4);

    if (slicedNews.length === 0) {
        return null;
    }

    return (
        <div className="my-10">

            <div className="flex justify-between items-center mb-6 border-b border-accent pb-2">

                <h2 className="text-md md:text-xl font-bold text-secondary border-l-4 border-accent pl-3">
                    {sectionHeading}
                </h2>

                <Link to={articlePath}

                    className="text-md md:text-xl font-bold text-accent hover:text-secondary transition-colors"
                >
                    See More...
                </Link>

            </div>



            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
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