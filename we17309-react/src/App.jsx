// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/Product'
import React, { useEffect, useState } from 'react'


function App() {
  const [products, setProduct] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductPage products={products} />} />
      </Routes>
    </div>
  )
}

export default App
