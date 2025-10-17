import React from 'react'
import { useAppContext } from '../contexts/AppContext';
import { assets } from '../assets/assets';
import { easeInOut, motion } from "framer-motion";

const ProductItem = ({ product }) => {
    const [count, setCount] = React.useState(0);
    const { navigate, addToCart, cartItem, deleteCartItem, updateCartItem, currency } = useAppContext();

    return product && (
        <motion.div
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: easeInOut }}
            onClick={() => { navigate(`/products/${product.category.toLowerCase()}/${product._id}`); scrollTo(0, 0) }} className="border border-gray-500/20 rounded-md px-4 py-3 bg-white h-full flex flex-col w-full">
            <div className="group cursor-pointer flex items-center justify-center px-4">
                <img className="group-hover:scale-105 transition max-w-26 md:max-w-36" src={product.image[0]} alt={product.name} />
            </div>
            <div className="text-gray-500/60 text-sm">
                <p>{product.category}</p>
                <p className="text-gray-700 font-medium text-lg truncate w-full">{product.name}</p>
                <div className="flex items-center gap-0.5">
                    {Array(5).fill('').map((_, i) => (
                        <img key={i} src={i < 4 ? assets.star_icon : assets.star_dull_icon} />
                    ))}
                    <p>(4)</p>
                </div>
                <div className="flex items-end justify-between mt-3">
                    <p className="md:text-xl text-base font-medium text-purple-700">
                        {currency}{product.offerPrice} {" "} <span className="text-gray-500/60 md:text-sm text-xs line-through">{currency}{product.price}</span>
                    </p>
                    <div onClick={(e) => e.stopPropagation()} className="text-purple-900">
                        {!cartItem[product._id] ? (
                            <button className="flex items-center justify-center gap-1 bg-purple-100 border border-purple-300 md:w-[80px] w-[64px] h-[34px] hover:bg-purple-400/30 cursor-pointer rounded text-purple-900 font-medium" onClick={() => addToCart(product._id)}  >
                                <img src={assets.cart_icon} alt="cart icon" className='w-4' />
                                Add
                            </button>
                        ) : (
                            <div onClick={(e) => e.stopPropagation()} className="flex items-center justify-center gap-2 md:w-20 w-16 h-[34px] bg-purple-500/25 rounded select-none">
                                <button onClick={(e) => { deleteCartItem(product._id); e.stopPropagation() }} className="cursor-pointer text-md px-2 h-full" >
                                    -
                                </button>
                                <span className="w-5 text-center text-purple-900">{cartItem[product._id]}</span>
                                <button onClick={(e) => {
                                    e.stopPropagation();
                                    addToCart(product._id);
                                }} className="cursor-pointer text-md px-2 h-full" >
                                    +
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ProductItem