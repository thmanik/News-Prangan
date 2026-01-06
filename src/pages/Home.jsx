// src/pages/Home.jsx

import React, { useState, useEffect } from 'react';
import VerticalImageCard from '../components/VerticalImageCard';
import CoverImageCard from '../components/CoverImageCard';
import TextOnlyCard from '../components/TextOnlyCard';
import SideImageCard from '../components/SideImageCard';


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
        setNewsData(Array.isArray(data) ? data : []); 
        setError(null);
      } catch (e) {
        console.error("Could not fetch data:", e);
        setError("Sorry! Data is not Fetched"); 
      } finally {
        setLoading(false); 
      }
    };

    fetchNewsData();
  }, []);

  
  if (loading) {
    return (
        <div className="flex justify-center items-center h-48">
            <p className="text-xl font-medium text-secondary">loading....</p>
        </div>
    );
  }

  if (error) {
    return (
        <div className="text-center p-8 bg-primary border border-accent text-secondary rounded mx-auto my-8 max-w-lg">
            <p className="font-bold text-lg">Error!</p>
            <p>{error}</p>
        </div>
    );
  }

  const verticalImageArticles = newsData.filter(item => item.cardType === "verticalImageCard");
  const firstVerticalImageCard = verticalImageArticles[0];

  const coverImageCards = newsData.filter(item => item.cardType === "coverImageCard");
  
  const textOnlyCards = newsData.filter(item => item.cardType === "textOnlyCard");

  const sideImageCards = newsData.filter(item => item.cardType === "sideImageCard");


  return (
    <div className="container mx-auto px-4 py-8">
      
      <div className="grid grid-cols-12 gap-8">
        
        <div className="col-span-12 md:col-span-3">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-secondary border-b border-accent pb-2 mb-4">Cover Stories</h3>
            {
              coverImageCards.map(item => (
                <CoverImageCard key={item.id} news={item} />
              ))
            }
          </div>
        </div>

        <div className="col-span-12 md:col-span-6">
            
            {firstVerticalImageCard && (
                <div className="mb-8 border-b border-accent pb-8">
                    <VerticalImageCard news={firstVerticalImageCard} /> 
                </div>
            )}
            
            <div className="divide-y divide-accent">
                {
                    textOnlyCards.map(item => (
                        <TextOnlyCard key={item.id} news={item} />
                    ))
                }
            </div>
        </div>
        
        <div className="col-span-12 md:col-span-3">
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-secondary border-b border-accent pb-2 mb-4">Trending</h3>
                {
                    sideImageCards.map(item => (
                        <SideImageCard key={item.id} news={item} />
                    ))
                }
            </div>
        </div>

      </div>
      
    </div>
  );
}