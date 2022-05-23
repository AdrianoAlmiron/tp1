import React from 'react';
import NavBar from './components/navegacion/NavBar';

import Video from './components/videos/video';
import Video2 from './components/videos/Video2';

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
        <Routes>
          <Route path="/" element={<Video
          id="Video"
          src="assets/videos/Londra.mp4"
           title="PAULO LONDRA || BZRP Music Sessions #23"
          description="41,753,197 vistas"
         />} />
         </Routes>
         <Routes>
          <Route path="/" element={<Video2
        src="assets/videos/Rene.mp4"
        title="Residente || BZRP Music Sessions #46"
        description="89,753,197 vistas"
        />} />
         </Routes>
       </BrowserRouter>
       </CartContextProv>
  );
}

