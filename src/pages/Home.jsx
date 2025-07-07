import React from 'react'
import HeroSection from '../components/HeroSection'; // ✅ default import
import FeaturedSection from '../components/FeaturedSection';
import TrailersSection from '../components/TrailersSection';

const Home = () => {
  return (
    <>
      <HeroSection/>
      <FeaturedSection/>
      <TrailersSection/>
    </>
  )
}

export default Home