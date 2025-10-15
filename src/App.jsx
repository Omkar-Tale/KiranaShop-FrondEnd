import Navbar from './components/Navbar'
import {Routes, Route, useLocation} from "react-router-dom"
import Home from "./pages/Home"
import Footer from './components/Footer'
import { useAppContext } from './contexts/AppContext'
import Login from './components/Login'
import AllProducts from './pages/AllProducts'
import ProductCategory from './pages/ProductCategory'
import ProductDetails from './pages/ProductDetails'
import { Toaster } from 'react-hot-toast'
import CartDetails from './pages/CartDetails'
import AddAddress from './pages/AddAddress'
import MyOrders from './pages/MyOrders'
import SellerLogin from './components/seller/SellerLogin'
import SellerLayout from './pages/seller/SellerLayout'
import Contact from './pages/Contact'

const App = () => {
  const isSellerPath = useLocation().pathname.includes("seller")
  const { showUserLogin, isSeller } = useAppContext()
  return (
    <>
    {isSellerPath ? null : <Navbar />}
    <Toaster />
    {showUserLogin ? <Login /> : null}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<AllProducts />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:category' element={<ProductCategory />} />
        <Route path='/products/:category/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<CartDetails />} />
        <Route path='/add-address' element={<AddAddress />} />
        <Route path='/my-orders' element={<MyOrders />} />
        <Route path='/seller' element={isSeller ? <SellerLayout /> : <SellerLogin />}>

        </Route>
      </Routes>
      {!isSellerPath && <Footer />}
    </>
  )
}

export default App