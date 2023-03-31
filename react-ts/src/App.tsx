import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { getAllProduct, deleteProduct, addProduct, updateProduct } from './api/product'
import ProductPage from './pages/Product'
import { IProduct } from './types/product'
import ProductDetailPage from './pages/ProductDetail'
import AddProductPage from './pages/admin/AddProduct'
function App() {
  const [products, setProduct] = useState<IProduct[]>([])
  useEffect(() => {
    getAllProduct().then(({ data }) => setProduct(data))
  }, [])
  const onHandleRemove = (id: number) => {
    deleteProduct(id).then(() => setProduct(products.filter(product => product.id !== id)))
  }
  const onHandleAdd = (product) => {
    addProduct(product)
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage />} />
          <Route path='products'  >
            <Route index element={<ProductPage products={products} onRemove={onHandleRemove} />} />
            <Route path=':id' element={<ProductDetailPage products={products} />} />
          </Route>
        </Route>

        <Route path='/admin'>
          <Route path='products'>
            <Route path='add' element={<AddProductPage onAdd={onHandleAdd} />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
