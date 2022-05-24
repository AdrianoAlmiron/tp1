import React from 'react';
import NavBar from './components/navegacion/NavBar';



import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import CartContextProv from "./context/CartContext";
import Cart from './components/Cart';

export default function App() {

  
  return (
    <CartContextProv>
    <BrowserRouter>
        <div className='App'>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer/>} />
          <Route path="/*" element={<Navigate to="/" replace/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
        </div>
       </BrowserRouter>
       </CartContextProv>
  );
}

