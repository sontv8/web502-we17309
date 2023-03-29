import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
