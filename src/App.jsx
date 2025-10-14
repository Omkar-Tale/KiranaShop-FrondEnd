import React from 'react'
import Navbar from './components/Navbar'
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Footer from './components/Footer'
import { useAppContext } from './contexts/AppContext'
import Login from './components/Login'
import AllProducts from './pages/AllProducts'
import ProductCategory from './pages/ProductCategory'
import ProductDetails from './pages/ProductDetails'
import { Toaster } from 'react-hot-toast'
import CartDetails from './pages/CartDetails'

const App = () => {
  const { showUserLogin } = useAppContext()
  return (
    <>
    <Navbar />
    <Toaster />
    {showUserLogin ? <Login /> : null}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<AllProducts />} />
        <Route path='/product/:category' element={<ProductCategory />} />
        <Route path='/products/:category/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<CartDetails />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App