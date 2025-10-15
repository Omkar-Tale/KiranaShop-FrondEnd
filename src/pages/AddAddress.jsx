import React, { useState } from 'react'
import { assets } from '../assets/assets';

const InputFeild = ({type, placeholder, name, handleChange, address}) => (
  <input
  className='w-full px-2 py-2.5 border border-gray-500/30 rounded outline-none text-gray-500 focus:border-purple-500 transition'
  type={type}
  placeholder={placeholder}
  onChange={handleChange}
  name={name}
  value={address[name]}
  required
  />
);

const AddAddress = () => {

  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  })

  const handleChange = (e)=>{
    const {name, value } = e.target;
    setAddress((prev)=> ({
      ...prev,
      [name]: value
    }))
  }

  const onSibmitHandler = async (e) => {
    e.preventDefault()
  }
  return (
    <div className='mt-16 pb-16 px-6 sm:px-20'>
      <div className='flex flex-col gap-0.5'>
        <p className='text-2xl md:text-3xl text-gray-500'>Add Shipping <span className='font-semibold text-purple-700'>Address</span></p>
        <div className='sm:w-73 w-58 h-0.5 bg-purple-700 rounded-full'></div>
      </div>

      {/* two cols */}
      <div className='flex flex-col-reverse md:flex-row justify-between mt-10'>
        {/* first col */}
        <div className='flex-1 max-w-md'>
          <form onSubmit={onSibmitHandler} className='space-y-3 mt-6 text-sm'>
            <div className='grid grid-cols-2 gap-4'>
              <InputFeild handleChange={handleChange} address={address} name="firstName" type="text" placeholder="First Name" />
              <InputFeild handleChange={handleChange} address={address} name="lastName" type="text" placeholder="Last Name" />
            </div>
              <InputFeild handleChange={handleChange} address={address} name="email" type="email" placeholder="Email" />
              <InputFeild handleChange={handleChange} address={address} name="stree" type="text" placeholder="Street" />
              <div className='grid grid-cols-2 gap-4'>
              <InputFeild handleChange={handleChange} address={address} name="city" type="city" placeholder="City" />
              <InputFeild handleChange={handleChange} address={address} name="state" type="state" placeholder="State" />
              </div>
              <div className='grid grid-cols-2 gap-4'>
              <InputFeild handleChange={handleChange} address={address} name="pincode" type="pincode" placeholder="Pincode" />
              <InputFeild handleChange={handleChange} address={address} name="country" type="country" placeholder="Country" />
              </div>
              <InputFeild handleChange={handleChange} address={address} name="phone" type="country" placeholder="Phone No.." />
              <button className='w-full bg-purple-600 hover:bg-purple-700 font-semibold text-base cursor-pointer text-white py-3 rounded-md'>Save Address</button>
          </form>
        </div>
        {/* second col */}
        <img src={assets.add_address_iamge} alt="add address" className='md:mr-16 mg-16 md:mt-0' />
      </div>
    </div>
  )
}

export default AddAddress