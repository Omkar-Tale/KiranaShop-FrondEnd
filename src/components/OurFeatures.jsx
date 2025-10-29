import React from 'react'
import { assets } from "../assets/assets.js" 

const OurFeatures = () => {
    const [isHover, setIsHover] = React.useState(false);

    return (
        <div className="flex sm:flex-row flex-col items-center mt-10 gap-1">
            <div className="mb-25 w-full bg-white relative text-gray-800">
                <h2 className="sm:text-3xl text-[20px] font-semibold text-center ml-6  mt-10 mb-5">Our Services</h2>
                <div className="relative z-10 flex flex-col md:flex-row items-center px-6 justify-center sm:gap-30 gap-10">
                    {/* <img src={assets.featuresJ} alt="Feature" className=" w-140 mt-3 object-cover rounded-2xl" /> */}
                    <div className="flex sm:flex-row flex-col sm:gap-15 gap-4 mt-5 px-4 md:px-0 ">
                        
                        <div className="p-6 hover:scale-110 transition border-green-300 flex flex-col items-center text-center gap-4 rounded-xl border hover:border-green-300 hover:bg-green-100 cursor-pointer">
                            <img src={assets.leaf_icon} className='sm:w-15 h-10 sm:h-15' alt="Freshness" />
                            <div className="space-y-2">
                                <h3 className="text-base font-semibold text-slate-700">Freshness Guaranteed</h3>
                                <p className="text-sm text-slate-600 max-w-xs">Fresh produce straight from the source.</p>
                            </div>
                        </div>

                        <div className="p-6 hover:scale-110 transition flex flex-col items-center text-center gap-4 rounded-xl border border-orange-300  hover:border-orange-300 hover:bg-orange-100 cursor-pointer">
                            <img src={assets.coin_icon} className='sm:w-15 h-10 sm:h-15' alt="Affordable Prices" />
                            <div className="space-y-2">
                                <h3 className="text-base font-semibold text-slate-700">Affordable Prices</h3>
                                <p className="text-sm text-slate-600 max-w-xs">Quality groceries at unbeatable prices.</p>
                            </div>
                        </div>

                        <div className="p-6 flex flex-col items-center text-center gap-4 rounded-xl border-blue-300 border hover:border-blue-300 hover:bg-blue-100 hover:scale-110 transition cursor-pointer">
                            <img src={assets.delivery_truck_icon} className='sm:w-15 h-10 sm:h-15' alt="Affordable Prices" />
                            <div className="space-y-2">
                                <h3 className="text-base font-semibold text-slate-700">Fastest Delivery</h3>
                                <p className="text-sm text-slate-600 max-w-xs">Groceries delivered in under 20 minutes.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurFeatures
