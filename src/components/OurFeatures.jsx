import React from 'react'
import { assets } from "../assets/assets.js"
import { easeInOut, motion } from "framer-motion";

const OurFeatures = () => {
    const [isHover, setIsHover] = React.useState(false);

    return (
        <motion.div
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: easeInOut }}
            viewport={{ amount: 0.2, once: true }}
            className="flex sm:flex-row flex-col items-center mt-10 gap-1">
            <div className="mb-25 w-full bg-white relative text-gray-800">
                <h2 className="text-4xl font-semibold text-center mt-10 mb-5">Our Services</h2>
                <div className="relative z-10 flex flex-col md:flex-row items-center px-6 justify-center sm:gap-30 gap-10">
                    <img src={assets.featuresJ} alt="Feature" className=" w-140 mt-3 object-cover rounded-2xl" />
                    <div className="flex flex-col gap-1 mt-5 px-4 md:px-0">
                        <div
                            className={`p-6 flex gap-4 rounded-xl border transition-colors mt-3 cursor-pointer ${isHover ? 'border-violet-300 bg-violet-100' : 'border-transparent hover:border-violet-300 hover:bg-violet-100'}`}
                            onMouseEnter={() => setIsHover(true)}
                            onMouseLeave={() => setIsHover(false)}
                        >
                            <img src={assets.delivery_truck_icon} className='sm:w-15 h-10 sm:h-15' alt="Fast Delivery" />
                            <div className="space-y-2">
                                <h3 className="text-base font-semibold text-slate-700">Fastest Delivery</h3>
                                <p className="text-sm text-slate-600 max-w-xs">Groceries delivered in under 30 minutes.</p>
                            </div>
                        </div>

                        <div className="p-6 flex gap-4 rounded-xl border border-transparent hover:border-green-300 hover:bg-green-100 transition-colors cursor-pointer">
                            <img src={assets.leaf_icon} className='sm:w-15 h-10 sm:h-15' alt="Freshness" />
                            <div className="space-y-2">
                                <h3 className="text-base font-semibold text-slate-700">Freshness Guaranteed</h3>
                                <p className="text-sm text-slate-600 max-w-xs">Fresh produce straight from the source.</p>
                            </div>
                        </div>

                        <div className="p-6 flex gap-4 rounded-xl border border-transparent hover:border-orange-300 hover:bg-orange-100 transition-colors cursor-pointer">
                            <img src={assets.coin_icon} className='sm:w-15 h-10 sm:h-15' alt="Affordable Prices" />
                            <div className="space-y-2">
                                <h3 className="text-base font-semibold text-slate-700">Affordable Prices</h3>
                                <p className="text-sm text-slate-600 max-w-xs">Quality groceries at unbeatable prices.</p>
                            </div>
                        </div>

                        <div className="p-6 flex gap-4 rounded-xl border border-transparent hover:border-blue-300 hover:bg-blue-100 transition-colors cursor-pointer">
                            <img src={assets.trust_icon} className='sm:w-15 h-10 sm:h-15' alt="Affordable Prices" />
                            <div className="space-y-2">
                                <h3 className="text-base font-semibold text-slate-700">Trusted by Thousands</h3>
                                <p className="text-sm text-slate-600 max-w-xs">Loved by 10,000+ happy customers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default OurFeatures
