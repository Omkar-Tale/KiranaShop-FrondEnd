import React, { useState } from 'react'
import ProductItem from './ProductItem'
import { dummyProducts } from '../assets/assets'

const TopProducts = () => {

    const categories = [...new Set(dummyProducts.map(p => p.category))];

    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    const filteredProducts = dummyProducts.filter(p => p.category === selectedCategory).slice(0, 10)

    return (
        <div className='mt-10'>
            <h1 className='font-outfit text-3xl font-semibold mb-6'>
                Top Selling Products
            </h1>
            {/* tabs */}
            <div className='flex w-full justify-center pt-3 gap-8 mb-5'>
                {categories.map((cat, index) => (
                    <div key={index} className='relative'>
                        <h2 className={`text-2xl font-medium px-3 py-1 cursor-pointer ${selectedCategory === cat ? 'text-purple-800' : 'text-gray-700 hover:text-purple-600 transition-colors duration-300'}`} onClick={() => setSelectedCategory(cat)}>{cat}</h2>
                        {selectedCategory === cat && (
                            <span className='absolute left-0 bottom-0 w-full h-0.5 bg-purple-800 rounded-full transition-all duration-300'></span>
                        )}
                    </div>
                ))}
            </div>
            {/* product details */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5'>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product, index) => (
                        <ProductItem product={product} key={index} />
                    ))
                ) : (
                    <h2>Products not found!</h2>
                )}
            </div>

        </div>
    )
}

export default TopProducts
