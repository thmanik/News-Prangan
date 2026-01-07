
import React, { useState, useEffect } from 'react';
import VerticalImageCard from '../components/VerticalImageCard';
import CoverImageCard from '../components/CoverImageCard';
import TextOnlyCard from '../components/TextOnlyCard';
import SideImageCard from '../components/SideImageCard';
import PageTitle from '../components/PageTitle';
import CategorySection from '../components/CategorySection';
import Loading from '../components/Loading';


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
        setError("Sorry! Data is not Fetched");
      } finally {
        setLoading(false);
      }
    };

    fetchNewsData();
  }, []);


  if (loading) {
    return<Loading/>
  }

  if (error) {
    return (
      <div className="text-center p-8 bg-primary border border-accent text-secondary rounded mx-auto my-8 max-w-lg">
        <p className="font-bold text-lg">Error!</p>
        <p>{error}</p>
      </div>
    );
  }

  const verticalImageCard = newsData.filter(item => item.cardType === "verticalImageCard");
  const firstVerticalImageCard = verticalImageCard[0];

  const coverImageCards = newsData.filter(item => item.cardType === "coverImageCard").slice(0, 2);
  const textOnlyCards = newsData.filter(item => item.cardType === "textOnlyCard").slice(0, 2);
  const sideImageCards = newsData.filter(item => item.cardType === "sideImageCard").slice(0, 4);


  const NationalNews = newsData.filter(item => item.category === "National");
  const InternationalNews = newsData.filter(item => item.category === "International");
  const SportsNews = newsData.filter(item => item.category === "Sports");
  const TechnologyNews = newsData.filter(item => item.category === "Technology");




  return (
    <>
      <PageTitle title="Home" />
      <div className="container mx-auto md:mt-8 px-4 py-2 md:py-4">

        <div className="grid grid-cols-12 gap-8">

          <div className="col-span-12 md:col-span-3">
            <div className="space-y-6">
              <h3 className="text-md md:text-xl font-bold text-secondary border-b border-accent pb-2 mb-4">Cover Stories</h3>
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

            <div className="space-y-4 divide-y divide-accent">
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

        <div>
          <CategorySection sectionHeading={"National"} allNewsItems={NationalNews} />
          <CategorySection sectionHeading={"International"} allNewsItems={InternationalNews} />
          <CategorySection sectionHeading={"Sports"} allNewsItems={SportsNews} />
          <CategorySection sectionHeading={"Technology"} allNewsItems={TechnologyNews} />
        </div>


      </div>
    </>
  );
}

