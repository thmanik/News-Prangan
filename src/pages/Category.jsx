
import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import VerticalImageCard from '../components/VerticalImageCard';
import SideImageCard from '../components/SideImageCard';
import TextOnlyCard from '../components/TextOnlyCard';
import PageTitle from '../components/PageTitle';
import fileBox from "../../public/images/FileBoxIcon.png"
import Loading from '../components/Loading';

export default function CategoryPage() {
    const { categoryName, subCategoryName } = useParams();
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const JSON_URL = '/data.json';

        const fetchAllNewsData = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(JSON_URL);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setNewsData(data);
                setError(null);
            } catch (error) {
                console.error("Could not fetch data:", error);
                setError("Error fetching news data.");
            } finally {
                setLoading(false);
            }
        };
        fetchAllNewsData();
    }, []);

    const filteredNews = useMemo(() => {
        if (!newsData || newsData.length === 0 || !categoryName) {
            return [];
        }

        let result = newsData.filter(news =>
            news.category.toLowerCase() === categoryName.toLowerCase()
        );

        if (subCategoryName) {
            result = result.filter(news => {
                const sub = news.subCategory;
                return sub && sub.toLowerCase() === subCategoryName.toLowerCase();
            });
        }

        return result.sort((a, b) => b.id - a.id);

    }, [newsData, categoryName, subCategoryName]);

    const pageTitle = subCategoryName
        ? `${subCategoryName} - ${categoryName}`
        : categoryName;


    if (loading) {
        return<Loading/>
    }

    if (error) {
        return (
            <div className="text-center p-8 text-red-500">{error}</div>
        );
    }



    const featuredNews = filteredNews[0];
    const otherNews = filteredNews.slice(1);

    const topThreeSideNews = otherNews.slice(0, 3);
    const remainingNews = otherNews.slice(3);


    return (
        <>
            <PageTitle title={pageTitle} />
            <div className="container mx-auto px-4 md:mt-15 max-w-7xl">
                <h1 className="text-xl md:text-2xl font-bold mb-8 text-secondary uppercase border-b border-accent pb-2">
                    {pageTitle}
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 border-b border-accent pb-8">

                    <div className="md:col-span-8">
                        {featuredNews && (
                            <VerticalImageCard news={featuredNews} />
                        )}
                    </div>

                    <div className="md:col-span-4">
                        <h3 className="text-xl font-bold text-secondary border-b border-accent pb-2 mb-4">More in {categoryName}</h3>
                        <div className="space-y-4 divide-y divide-gray-200">
                            {topThreeSideNews.map(item => (
                                <SideImageCard key={item.id} news={item} />
                            ))}
                        </div>
                    </div>

                </div>

                <div className="mt-8">
                    <h2 className="text-3xl font-bold mb-6 text-secondary border-b-2 border-accent pb-2">Latest News</h2>

                    {remainingNews.length > 0 ? (

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {remainingNews.map(item => (
                                <div key={item.id} className="col-span-1">
                                    <SideImageCard key={item.id} news={item} />
                                </div>
                            ))}
                        </div>

                    ) : (

                        <div className="p-10 bg-gray-50/10 border border-dashed border-accent/50 rounded-lg text-center my-10">
                            <p className="text-xl font-semibold text-secondary mb-2">No Latest News Available Yet.</p>
                            <p className="text-accent">Please check back later for more updates.</p>
                            <img className="w-10 h-10 mx-auto mt-4 opacity-50" src={fileBox} alt="File Box Icon" />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}