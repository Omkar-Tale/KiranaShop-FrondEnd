import React from 'react'
import {NavLink} from "react-router-dom"
import { assets } from '../assets/assets'
import { useAppContext } from '../contexts/AppContext';

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const {user,navigate, setUser,  setShowUserLogin}= useAppContext();
    const logout = ()=>{
        setUser(null);
        navigate("/")
    }
  return (
    <nav className="flex items-center font-outfit justify-between px-6 md:px-13 lg:px-16 xl:px-20 py-2 border-b border-gray-300 bg-transparent relative transition-all">

            <NavLink to="/" onClick={()=>setOpen(false)}>
                <img src={assets.logo} className='h-9' alt="logo" />
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">
                <NavLink to="/" className={({isActive})=> isActive ? "text-purple-800" : "text-black"} >Home</NavLink>
                <NavLink to="/products" className={({isActive})=> isActive ? "text-purple-800" : "text-black"}>All Products</NavLink>                
                <NavLink to="/contact" className={({isActive})=> isActive ? "text-purple-800" : "text-black"}>Contact</NavLink>

                <div className="hidden lg:flex items-center text-sm gap-2 border border-purple-700 px-3 rounded-full">
                    <input className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
                    <img src={assets.search_icon} alt="search icon" className='w-5' />
                </div>

                <div onClick={()=> navigate("/cart")} className="relative cursor-pointer">
                    <img src={assets.cart_icon} alt="cart" className='w-7' />
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-purple-700 w-[18px] h-[18px] rounded-full">3</button>
                </div>

                {!user ? (<button onClick={()=> setShowUserLogin(true)} className="cursor-pointer px-8 py-2 bg-purple-700 hover:bg-purple-600 transition text-white text-shadow-white rounded-full">
                    Login
                </button>):(
                   <div className='relative group'>
                        <img src={assets.profile_icon} className='w-10' alt="asd" />
                        <ul className='hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 w-30 rounded-md text-sm z-40'>
                            <li onClick={() => navigate('my-orders')} className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'>My Orders</li>
                            <li onClick={logout} className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'>Logout</li>
                        </ul>
                    </div>
                )}
            </div>

            <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                {/* Menu Icon SVG */}
                <img src={assets.menu_icon} alt="menu" className='w-6'/>
            </button>

            {/* Mobile Menu */}
            <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] z-30 left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                <NavLink to="/" className={({isActive})=> isActive ? "text-purple-800" : "text-black"} onClick={() => open ? setOpen(false) : setOpen(true)}>Home</NavLink>

                <NavLink onClick={()=> open ? setOpen(false) : setOpen(true)} to="/products" className={({isActive})=> isActive ? "text-purple-800" : "text-black" }>All Products</NavLink>

                {user && <NavLink to="/my-orders" onClick={()=> open ? setOpen(false) : setOpen(true)} className={({isActive})=> isActive ? "text-purple-800" : "text-black"}>My Orders</NavLink>}

                <NavLink onClick={()=> open ? setOpen(false) : setOpen(true)} to="/contact" className={({isActive})=> isActive ? "text-purple-800" : "text-black"}>Contact</NavLink>

                {!user ? (<button onClick={()=>setShowUserLogin(true)} className="cursor-pointer px-6 py-2 mt-2 bg-purple-700 hover:bg-purple-600 transition text-white rounded-full text-sm">
                    Login
                </button>):
                (
                <button className="cursor-pointer px-6 py-2 mt-2 bg-purple-700 hover:bg-purple-600 transition text-white rounded-full text-sm">
                    Logout
                </button>
                )}
            </div>

        </nav>
  )
}

export default Navbar