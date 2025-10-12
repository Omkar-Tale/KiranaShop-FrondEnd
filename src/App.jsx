import React from 'react'
import Navbar from './components/Navbar'
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Footer from './components/Footer'
import { useAppContext } from './contexts/AppContext'
import Login from './components/Login'

const App = () => {
  const { showUserLogin } = useAppContext()
  return (
    <>
    <Navbar />
    {showUserLogin ? <Login /> : null}
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App