import React from 'react'
import { categories } from '../assets/assets'
import { useAppContext } from '../contexts/AppContext'

const Categories = () => {
    const {navigate} = useAppContext()
  return (
    <div className='mt-10'>
        <h1 className='font-outfit text-3xl font-semibold'>Categories</h1>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 mb-10 mt-5 gap-6'>
            {categories.map((categories, index)=>(
                <div key={index} onClick={()=> navigate(`/product/${categories.path.toLocaleLowerCase()}`)} className='flex flex-col items-center cursor-pointer rounded-2xl justify-center text-center py-8 gap-1 border-2' style={{backgroundColor: categories.bgColor, borderColor: categories.borderColor, borderStyle: 'solid'}}>
                    <img src={categories.image} alt="categories" className='w-25 group-hover:scale-108 transition' />
                    <p>{categories.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Categories