import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'
import { dummyProducts } from '../assets/assets'
import { useAppContext } from '../contexts/AppContext'

const TopProducts = () => {
    const {products} = useAppContext()
    const [selectedCategory, setSelectedCategory] = useState('')
    const [categories, setCategories] = useState([])
    const defaultCategory = "Fruits";
    
    useEffect(()=>{
        if(products.length  > 0){
        const uniqueCategories = [...new Set(products.map(p => p.category))];
        setCategories(uniqueCategories);

        if(uniqueCategories.includes(defaultCategory)){
            setSelectedCategory(defaultCategory)
        }else{
            setSelectedCategory(uniqueCategories[0])
        }
    }
    }, [products])

   
     const filteredProducts = products.filter(p => p.category === selectedCategory).slice(0, 10)
     console.log(categories);

    return (
        <div className='mt-10'>
            <h1 className='font-outfit sm:text-3xl text-[20px] font-semibold mb-3'>
                Top Selling Products
            </h1>
            {/* tabs */}
            <div className='flex w-full sm:gap-5 gap-2 flex-row overflow-x-scroll hideScrollber sm:mb-4 mb-5 sm:justify-center relative'>
                {categories.map((cat, index) => (
                    <div key={index} className={`px-4 py-1 border rounded-full ${selectedCategory === cat ? 'bg-purple-200 border-purple-500' : 'bg-white border-gray-300'}`}>
                        <h2 className={`text-lg font-medium px-3 py-1 cursor-pointer ${selectedCategory === cat ? 'text-purple-900' : 'text-gray-700 hover:text-purple-600 transition-colors duration-300'}`} onClick={() => setSelectedCategory(cat)}>{cat}</h2>
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
                    <h2 className='text-xl font-medium text-purple-600 w-100 ml-110 pt-10'>Plase click on the top selling categories</h2>
                )}
            </div>

        </div>
    )
}

export default TopProducts
