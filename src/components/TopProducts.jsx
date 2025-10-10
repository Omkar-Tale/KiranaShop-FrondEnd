import React from 'react'
import ProductItem from './ProductItem'
import { dummyProducts } from '../assets/assets'

const TopProducts = () => {
    const categoies = [...new Set(dummyProducts.map(p => p.category))]
  return (
    <div>
        <h1 className='font-outfit text-3xl font-semibold'>Best Selling Products</h1>
        {categoies.map((category, index)=>{
            const filteredCategories = dummyProducts.filter(p => p.category === category).slice(0 ,10)
             return(
                <div key={index}>
                    <h2 className='font-outfit text-2xl mt-3 font-semibold'>Best Selling {category}</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-6">
                        {filteredCategories.map((product, index)=>(
                            <ProductItem product={product} key={index} className="h-full" />
                        ))}
                    </div>
                </div>
             )
        })}
    </div>
  )
}

export default TopProducts