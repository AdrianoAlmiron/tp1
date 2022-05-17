import React from 'react';
import NavBar from './componets/navegacion/NavBar.js';

import Video from './componets/videos/video';
import Video2 from './componets/videos/Video2';

import ItemListContainer from './componets/ItemListContainer';
import ItemDetailContainer from './componets/ItemDetailContainer.js';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

export default function App() {

  
  return (
    <BrowserRouter>
        <div className='App'>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Hola, soy ItemListContainer!"/>} />
          <Route path="/category/:id" element={<ItemListContainer greeting="Hola, soy ItemListContainer!"/>} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer/>} />
          <Route path="/*" element={<Navigate to="/" replace/>} />
        </Routes>
        </div>
        <Routes>
          <Route path="/" element={<Video
          src="assets/videos/Londra.mp4"
           title="PAULO LONDRA || BZRP Music Sessions #23"
          description="41,753,197 vistas"
         />} />
         </Routes>
       <Video2
        src="assets/videos/Rene.mp4"
        title="Residente || BZRP Music Sessions #46"
        description="89,753,197 vistas"
        />
       </BrowserRouter>
  );
}

