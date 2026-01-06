
import React, { useState, useEffect } from 'react';
import VerticalImageCard from '../components/VerticalImageCard';




export default function Home() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const JSON_URL = '/data.json'; 

    const fetchNewsData = async () => {
      try {
        const response = await fetch(JSON_URL);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setNewsData(data);
        setError(null);
      } catch (e) {
        console.error("Could not fetch data:", e);
        setError("দুঃখিত, নিউজ ডেটা লোড করা যায়নি।");
      } finally {
        setLoading(false); 
      }
    };

    fetchNewsData();
  }, []);

 
  if (loading) {
    return (
        <div className="flex justify-center items-center h-48">
            <p className="text-xl font-medium text-blue-600">খবর লোড হচ্ছে...</p>
        </div>
    );
  }

  if (error) {
    return (
        <div className="text-center p-8 bg-red-100 border border-red-400 text-red-700 rounded mx-auto my-8 max-w-lg">
            <p className="font-bold">Error!</p>
            <p>{error}</p>
        </div>
    );
  }

  const firstFeaturedArticle = newsData.find(item => item.isFeatured);
  
  if (!firstFeaturedArticle) {
    return <div className="text-center p-8">No featured news articles found.</div>;
  }
  
  return (
    <div className="p-4 sm:p-8">
        <h1 className="text-4xl font-bold bg-primary mb-8">Home Page - Hero Story</h1>
        {
            newsData.map((data)=><VerticalImageCard news={data} /> )
        }
    </div>
  );
}