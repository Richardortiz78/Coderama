import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { Routes, Route } from 'react-router-dom'
import { Carrito } from './components/Carrito/Carrito'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './components/context/CartContext/CartProvider'

function App() {
  return (
    <>
    <CartProvider>
      <Header/>
      <div>
        <Routes>
          <Route path="/" element={<ItemListContainer />}   />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
           <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </div>
      <Footer/> 
      </CartProvider>  
    </>
  )
}

export default App