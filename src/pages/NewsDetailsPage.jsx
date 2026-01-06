

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ArticleDetails() {
  const { id } = useParams(); 
  
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const JSON_URL = '/data.json'; 
   

    const fetchArticleData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(JSON_URL);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        const foundArticle = data.find(item => item.id === parseInt(id)); 

        if (foundArticle) {
          setArticle(foundArticle);
        } else {
          setError("Article not found.");
        }
      } catch (e) {
        console.error("Could not fetch data:", e);
        setError("Error fetching article details.");
      } finally {
        setLoading(false); 
      }
    };

    if (id) {
      fetchArticleData();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <p className="text-xl font-medium text-secondary">Loading article...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8 bg-primary border border-accent text-secondary rounded mx-auto my-12 max-w-4xl">
        <p className="font-bold text-lg">Error!</p>
        <p className="text-accent">{error}</p>
      </div>
    );
  }

  if (article) {
    const subCategoryDisplay = Array.isArray(article.subCategory) 
      ? article.subCategory.join(' | ') 
      : article.subCategory;

    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        
        <div className="mb-6">
          <span className="text-sm font-semibold uppercase text-accent">
            {article.category}
          </span>
          {subCategoryDisplay && (
            <span className="text-sm font-semibold text-accent ml-2">
              | {subCategoryDisplay}
            </span>
          )}
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-secondary">
          {article.title}
        </h1>
        
        <p className="text-lg text-accent mb-6">
          {article.shortDescription}
        </p>

        <div className="text-sm text-accent mb-6 pb-4 border-b border-accent/50">
          Published Date: {article.publishedDate}
        </div>

        <img
          src={article.image}
          alt={article.title}
          className="w-full h-auto object-cover rounded-lg shadow-md mb-8"
        />
        
        <div className="text-secondary leading-relaxed text-base md:text-lg">
          {
           
            article.fullDescription 
          }
        </div>
      </div>
    );
  }
  
  return null; 
}