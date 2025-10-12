import React from 'react'
import { assets } from "../assets/assets.js"

const OurFeatures = () => {
    const [isHover, setIsHover] = React.useState(false);

    return (
        <div className="flex flex-col items-center mt-16 mb-16 gap-1">
            <div className="min-h-screen w-full bg-white relative text-gray-800">
            <h2 className="text-4xl font-semibold text-center mt-10 mb-5">Our Services</h2>
                <div
                    className="absolute inset-0 z-0 pointer-events-none"
                    style={{
                        backgroundImage: `
                            repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(75,85,99,0.08) 20px, rgba(75,85,99,0.08) 21px),
                            repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(107,114,128,0.06) 30px, rgba(107,114,128,0.06) 31px),
                            repeating-linear-gradient(60deg, transparent, transparent 40px, rgba(55,65,81,0.05) 40px, rgba(55,65,81,0.05) 41px),
                            repeating-linear-gradient(150deg, transparent, transparent 35px, rgba(31,41,55,0.04) 35px, rgba(31,41,55,0.04) 36px)
                        `,
                    }}
                />
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-center sm:gap-10 gap-10">
                    <img src={assets.featuresJ} alt="Feature" className=" w-150 mt-3 object-cover rounded-2xl" />
                    <div className="flex flex-col gap-1  mt-5 px-4 md:px-0">
                        <div
                            className={`p-6 flex gap-4 rounded-xl border transition-colors mt-3 cursor-pointer ${isHover ? 'border-violet-300 bg-violet-100' : 'border-transparent hover:border-violet-300 hover:bg-violet-100'}`}
                            onMouseEnter={() => setIsHover(true)}
                            onMouseLeave={() => setIsHover(false)}
                        >
                            <img src={assets.delivery_truck_icon} alt="Fast Delivery" />
                            <div className="space-y-2">
                                <h3 className="text-base font-semibold text-slate-700">Fastest Delivery</h3>
                                <p className="text-sm text-slate-600 max-w-xs">Groceries delivered in under 30 minutes.</p>
                            </div>
                        </div>

                        <div className="p-6 flex gap-4 rounded-xl border border-transparent hover:border-green-300 hover:bg-green-100 transition-colors cursor-pointer">
                            <img src={assets.leaf_icon} alt="Freshness" />
                            <div className="space-y-2">
                                <h3 className="text-base font-semibold text-slate-700">Freshness Guaranteed</h3>
                                <p className="text-sm text-slate-600 max-w-xs">Fresh produce straight from the source.</p>
                            </div>
                        </div>

                        <div className="p-6 flex gap-4 rounded-xl border border-transparent hover:border-orange-300 hover:bg-orange-100 transition-colors cursor-pointer">
                            <img src={assets.coin_icon} alt="Affordable Prices" />
                            <div className="space-y-2">
                                <h3 className="text-base font-semibold text-slate-700">Affordable Prices</h3>
                                <p className="text-sm text-slate-600 max-w-xs">Quality groceries at unbeatable prices.</p>
                            </div>
                        </div>

                        <div className="p-6 flex gap-4 rounded-xl border border-transparent hover:border-orange-300 hover:bg-orange-100 transition-colors cursor-pointer">
                            <img src={assets.trust_icon} alt="Affordable Prices" />
                            <div className="space-y-2">
                                <h3 className="text-base font-semibold text-slate-700">Trusted by Thousands</h3>
                                <p className="text-sm text-slate-600 max-w-xs">Loved by 10,000+ happy customers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurFeatures
