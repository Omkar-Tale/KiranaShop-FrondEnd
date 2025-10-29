import React from 'react'
import { assets, imageSlides } from '../assets/assets'
import { Link } from "react-router-dom"
import { useState } from 'react'
import { useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const MainBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % imageSlides.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + imageSlides.length) % imageSlides.length);
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => {
      clearInterval(interval)
    }
  }, [])
  return (
    <>
      <div
        className='overflow-hidden relative h-[70vh]'>
        <div className='flex transition-transform ease-in-out duration-700' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>

          {imageSlides.map((slide, index) => (
            <div className='w-full h-[70vh] relative flex-shrink-0 top-0' key={index}>
              <img src={slide.image} alt="banners" className='w-full  h-[70vh] object-cover' />

              <div className="absolute inset-0 bg-black/60"></div>
            </div>


          ))}
        </div>
        <div className='absolute inset-0 flex flex-col items-center justify-center text-white'>

          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15'>
            Freshness You Can Trust, Savings You Will Love!
          </h1>
          <div className='flex mt-6 mr-12 justify-center md:justify-start flex-col md:flex-row'>
            <Link to={"/products"} className="group mr-5 flex items-center gap-2 px-7 md:px-9 py-3 bg-purple-700 hover:bg-purple-600 transition rounded-md text-white cursor-pointer">
              Shop Now
              <img src={assets.white_arrow_icon} alt="arrow" className='md:hidden transition group-focus:translate-x-1' />
            </Link>

            <Link to={"/products"} className="group hidden md:flex items-center bg-gray-400 gap-2 px-5 py-3 cursor-pointer rounded-md">
              Explore Deals
              <img src={assets.black_arrow_icon} alt="arrow" className='transition group-focus:translate-x-1' />
            </Link>
          </div>
        </div>
        <button
          onClick={prevSlide}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer bg-white/50 hover:bg-white text-gray-800 px-3 py-3 text-2xl rounded-full shadow"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer bg-white/50 hover:bg-white text-gray-800 px-3 py-3 text-2xl rounded-full shadow"
        >
          <FaArrowRight />
        </button>
        <div className="hidden absolute bottom-5 left-1/2 -translate-x-1/2 sm:flex gap-3">
          {imageSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-purple-700 scale-125' : 'bg-gray-400 hover:bg-gray-300'}`}
            ></button>
          ))}
        </div>
      </div>
    </>
  )
}

export default MainBanner