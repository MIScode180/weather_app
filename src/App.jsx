import React from 'react'
import {  Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Favorites  from './pages/Favorites'
import NotFound from './pages/NotFound'
import Header from './components/Header'

import './App.css'


function App() {


  return (
 
        <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default App
