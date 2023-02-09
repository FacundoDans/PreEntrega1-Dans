import './App.css';
import React from 'react';

import {BrowserRouter, Routes,Route} from 'react-router-dom';

import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CartProvider from './context/CartContext';

function App() {
  return (
    <>
    <BrowserRouter>
    <CartProvider>
    <Navbar />
    <Routes>
      <Route path='/' element={<ItemListContainer texto = 'NombreDefault' />} />
      <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
    </Routes>
    </CartProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
