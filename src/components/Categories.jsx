import React from 'react'
import { categories } from '../assets/assets'
import { useAppContext } from '../contexts/AppContext';

const Categories = () => {
    const {navigate} = useAppContext()
  return (
    <div className='mt-10'>
        <h1 className='font-outfit sm:text-3xl text-[20px] font-semibold'>Categories</h1>
        <div className='flex  w-full sm:gap-5 gap-2 flex-row overflow-x-scroll hideScrollber sm:mb-4 px-6 mt-5 mb-8 sm:justify-center relative'>
            {categories.map((categories, index)=>(
                <div key={index} onClick={()=> {navigate(`/product/${categories.path.toLocaleLowerCase()}`); window.scrollTo(0,0)}} className='flex flex-col items-center cursor-pointer sm:rounded-full rounded-2xl w-40 justify-center text-center px-6 hover:scale-95 transition border-2' style={{backgroundColor: categories.bgColor, borderColor: categories.borderColor, borderStyle: 'solid'}}>
                    <img src={categories.image} alt="categories" className='sm:w-25 w-35 group-hover:scale-108 transition' />
                    <p className='pb-2 text-[15px]'>{categories.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Categories