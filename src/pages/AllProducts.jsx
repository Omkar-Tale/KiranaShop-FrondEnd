import React from 'react'
import { useAppContext } from '../contexts/AppContext'
import { useEffect } from 'react';
import ProductItem from '../components/ProductItem';
import { useState } from 'react';
import { assets } from '../assets/assets';

const AllProducts = () => {
    const {products, searchQuery, setSearchQuery} = useAppContext();
    const [filteredProducts , setFilterProducts] = useState([]);

    useEffect(() => { 
      if(searchQuery.length > 0){
        setFilterProducts(
            products.filter((product)=> product.name.toLowerCase().includes(searchQuery))
        )
      }else{
            setFilterProducts(products)
        }
    }, [products, searchQuery])
    
    
  return (
    <div className='mt-15 flex flex-col mb-15 px-6 sm:px-10'>
      <div className='flex flex-col items-end w-max'>
        <h2 className='text-3xl flex flex-col uppercase font-outfit'>All Products</h2>
        <div className='w-30 h-0.5 bg-purple-700 rounded-full'></div>
      </div>
      <div>

        <div className="flex items-center sm:w-80 mt-5 text-sm gap-2 border border-purple-700 px-3 rounded-full">
          <input onChange={(e) => setSearchQuery(e.target.value)} className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
          <img src={assets.search_icon} alt="search icon" className='w-5' />
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 mt-6'>
          {filteredProducts.filter((product) => product.inStock).map((p, index) => (
            <ProductItem product={p} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AllProducts