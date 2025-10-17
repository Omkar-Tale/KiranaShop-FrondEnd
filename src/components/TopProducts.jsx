import React, { useState } from 'react'
import ProductItem from './ProductItem'
import { dummyProducts } from '../assets/assets'
import { easeInOut, motion } from "framer-motion";

const TopProducts = () => {

    const categories = [...new Set(dummyProducts.map(p => p.category))];

    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const filteredProducts = dummyProducts.filter(p => p.category === selectedCategory).slice(0, 10)

    return (
        <motion.div
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: easeInOut }}
            viewport={{ amount: 0.2, once: true }}
            className='mt-10'>
            <h1 className='font-outfit text-3xl font-semibold mb-6'>
                Top Selling Products
            </h1>
            {/* tabs */}
            <div className='flex w-full gap-5 flex-row overflow-x-scroll hideScrollber sm:mb-4 mb-8 sm:justify-center relative'>
                {categories.map((cat, index) => (
                    <div key={index} className={`px-4 py-1 border rounded-full ${selectedCategory === cat ? 'bg-purple-200 border-purple-500' : 'bg-white border-gray-300'}`}>
                        <h2 className={`text-xl font-medium px-3 py-1 cursor-pointer ${selectedCategory === cat ? 'text-purple-900' : 'text-gray-700 hover:text-purple-600 transition-colors duration-300'}`} onClick={() => setSelectedCategory(cat)}>{cat}</h2>
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

        </motion.div>
    )
}

export default TopProducts
