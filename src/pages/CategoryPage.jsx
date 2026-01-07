
import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import VerticalImageCard from '../components/VerticalImageCard';
import SideImageCard from '../components/SideImageCard';
import TextOnlyCard from '../components/TextOnlyCard';


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
    ? `${subCategoryName} in ${categoryName}` 
    : categoryName;


  if (loading) {
    return (
      <div className="flex justify-center items-center h-48">
        <p className="text-xl font-medium text-secondary">loading {pageTitle}...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8 text-red-500">{error}</div>
    );
  }
  
  if (filteredNews.length === 0) {
     return (
        <div className="text-center p-8">
            <h1 className="text-3xl font-bold mb-4">No Articles Found</h1>
            <p>We could not find any articles for: <span className="font-semibold uppercase">{pageTitle}</span></p>
        </div>
     );
  }
  
  const featuredArticle = filteredNews[0];
  const otherArticles = filteredNews.slice(1);
  
  const topThreeSideArticles = otherArticles.slice(0, 3);
  const remainingArticles = otherArticles.slice(3);


  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-4xl font-extrabold mb-8 text-secondary uppercase border-b-4 border-accent pb-2">
        {pageTitle}
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 border-b border-accent pb-8">
        
        <div className="md:col-span-8">
          {featuredArticle && (
             <VerticalImageCard news={featuredArticle} /> 
          )}
        </div>
        
        <div className="md:col-span-4">
            <h3 className="text-xl font-bold text-secondary border-b border-accent pb-2 mb-4">More in {categoryName}</h3>
            <div className="space-y-4 divide-y divide-gray-200">
                {topThreeSideArticles.map(item => (
                    <SideImageCard key={item.id} news={item} />
                ))}
            </div>
        </div>

      </div>
 
      <div className="mt-8">
          <h2 className="text-3xl font-bold mb-6 text-secondary border-b-2 border-accent pb-2">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {remainingArticles.map(item => {
                  switch (item.cardType) {
                      case 'textOnlyCard':
                          return (
                            <div key={item.id} className="col-span-1 border p-4">
                                <TextOnlyCard news={item} />
                            </div>
                          );
                      case 'coverImageCard':
                          return (
                            <div key={item.id} className="col-span-1">
                                <VerticalImageCard news={item} /> 
                            </div>
                          );
                      case 'sideImageCard':
                      case 'verticalImageCard':
                      default:
                          return (
                            <div key={item.id} className="col-span-1 border p-4">
                                <SideImageCard news={item} />
                            </div>
                          );
                  }
              })}
          </div>
      </div>
    </div>
  );
}