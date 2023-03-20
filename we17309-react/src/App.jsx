// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/Product'
import React, { useEffect, useState } from 'react'
import ProductDetailPage from './pages/ProductDetail'
import { deleteProduct, getAllProduct } from './api/product'


function App() {
  const [products, setProduct] = useState([])
  useEffect(() => {
    // fetch('http://localhost:3000/products')
    //   .then(res => res.json())
    //   .then(data => setProduct(data))
    getAllProduct().then(({ data }) => setProduct(data))
  }, [])
  const onHandleRemove = (id) => {
    // fetch('http://localhost:3000/products/' + id, {
    //   method: 'DELETE'
    // }).then(() => setProduct(products.filter(product => product.id !== id)))
    deleteProduct(id).then(() => setProduct(products.filter(product => product.id !== id)))
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductPage products={products} onRemove={onHandleRemove} />} />
        <Route path='/products/:id' element={<ProductDetailPage />} />
        {/* useParams() */}
      </Routes>
    </div >
  )
}

export default App
