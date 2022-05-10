import React from 'react';
import NavBar from './componets/navegacion/NavBar.js';

import Video from './componets/videos/video';
import Video2 from './componets/videos/Video2';

import ItemListContainer from './componets/ItemListContainer';

export default function App() {

  
  return (
    <>
        <NavBar />
        <Video
        src="assets/videos/Londra.mp4"
        title="PAULO LONDRA || BZRP Music Sessions #23"
        description="41,753,197 vistas"
        />
        <hr />
        <ItemListContainer greeting= "Mix: BZRP Music Sessions" />
        <hr />
        <Video2
        src="assets/videos/Rene.mp4"
        title="Residente || BZRP Music Sessions #46"
        description="89,753,197 vistas"
        />
       
    </>
    
  
  );
}

