import React from 'react'
import MainBanner from '../components/MainBanner'
import Categories from '../components/Categories'
import TopProducts from '../components/TopProducts'
import OurFeatures from "../components/OurFeatures"

const Home = () => {
  return (
    <div>
        <MainBanner />
        <div className='px-4 sm:px-6 md:px-8 lg:px-10'>
        <Categories />
        <TopProducts />
        <OurFeatures />
        </div>
    </div>
  )
}

export default Home