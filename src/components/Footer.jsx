import React from 'react'
import {NavLink} from "react-router-dom"
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="relative overflow-hidden px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500 bg-[#fafafa]">
      
      {/* 🔶 Diagonal Grid Pattern Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, rgba(255, 0, 100, 0.08) 0, rgba(255, 0, 100, 0.08) 1px, transparent 1px, transparent 20px),
            repeating-linear-gradient(-45deg, rgba(255, 0, 100, 0.08) 0, rgba(255, 0, 100, 0.08) 1px, transparent 1px, transparent 20px)
          `,
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* 🌟 Footer Content */}
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
          <div className="md:max-w-96">
            <img src={assets.logo} alt="logo" className="h-9" />
            <p className="mt-6 text-sm">
              We deliver fresh groceries and snacks straight to your door.
              Trusted by thousands, we aim to make your shopping experience simple and affordable.
            </p>
          </div>

          <div className="flex-1 flex items-start md:justify-end gap-20">
            <div>
              <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
              <ul className="text-sm space-y-2">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About us</NavLink></li>
                <li><NavLink to="/contact">Contact us</NavLink></li>
                <li><NavLink to="/pravacy">Privacy policy</NavLink></li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold mb-5 text-gray-800">Get in touch</h2>
              <div className="text-sm space-y-2">
                <p>+91-8452097707</p>
                <p>contact@example.com</p>
              </div>
            </div>
          </div>
        </div>

        <p className="pt-4 text-center text-xs md:text-sm pb-5">
          Copyright {new Date().getFullYear()} © kiranaShop All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
