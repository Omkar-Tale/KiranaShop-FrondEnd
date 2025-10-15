import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../contexts/AppContext'

const SellerLogin = () => {
    const {isSeller, setIsSeller, navigate} = useAppContext()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(()=>{
        if(isSeller){
            navigate("/seller")
        }
    })

    const onSubmitHandler = async (e)=>{
        e.preventDefault();
        setIsSeller(true)
    }
  return !isSeller && (
    <form onSubmit={onSubmitHandler} className='min-h-screen flex items-center text-sm text-gray-600 bg-black'>
        <div className='flex flex-col gap-5 items-center m-auto p-8 py-12 min-w-80 sm:min-w-88 bg-white shadow-[0px_20px_207px_10px_rgba(165,_39,_255,_0.48)] rounded-lg border border-gray-200 '>
              <div className='flex flex-col items-center'>
                  <p className='text-2xl font-medium m-auto'><span className='text-purple-800'>Seller</span> Login</p>
                  <div className='w-30 h-0.5 rounded-full bg-purple-800'></div>
              </div>
            <div className='w-full'>
                <p>Email</p>
                <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email"  placeholder='Enter your email...' className='border border-gray-300 rounded w-full p-2 mt-1 outline-purple-500' required/>
            </div>
            <div className='w-full'>
                <p>Password</p>
                <input onChange={(e)=> setPassword(e.target.value)} value={password}  type="password" placeholder='Enter your password...'  className='border border-gray-300 rounded w-full p-2 mt-1 outline-purple-500' required/>
            </div>
            <button className='bg-purple-800 hover:bg-purple-700 transition text-white w-full py-2 rounded-md cursor-pointer'>Login</button>
        </div>
    </form>
  )
}

export default SellerLogin

