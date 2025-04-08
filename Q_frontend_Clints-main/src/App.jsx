import React from 'react'
import LandingPage from './suby/pages/LandingPage'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import ProductMenu from './suby/components/ProductMenu'
import About from './suby/components/About'
import Menu from './suby/components/Menu'
import Contact from './suby/components/Contact'

const App = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element = { <LandingPage />} />
          <Route path='/products/:firmId/:firmName' element = {<ProductMenu />} />
          <Route path="/about" element={<About/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    
    </div>
  )
}

export default App