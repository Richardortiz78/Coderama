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
import { ProductFormContainer } from './components/adminComponents/ProductFormContainer/ProductFormContainer'
import { RutaProtegida } from './components/RutaProtegida/RutaProtegida'
import { MainLayout } from './layouts/MainLayout'
import { AdminLayout } from './layouts/AdminLayout'
import { Login } from './components/Login/Login'
import { AuthProvider } from './components/context/AuthContext/AuthProvider'


function App() {
  return (
    <>
   
    <CartProvider>
      <div>
        <Routes>
          <Route element = {<MainLayout />}>
          <Route path="/" element={<ItemListContainer />}   />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
           <Route path="/carrito" element={<Carrito />} />
           </Route>
            
          <Route  path="/admin" element={<Login/>}/>
          
          <Route path="/admin-panel" element={<RutaProtegida><AdminLayout/></RutaProtegida>}>
          <Route path="alta-productos" element={<RutaProtegida><ProductFormContainer/></RutaProtegida>}/></Route>

        </Routes>
      </div>
     </CartProvider>  
   
    </>
  )
}

export default App