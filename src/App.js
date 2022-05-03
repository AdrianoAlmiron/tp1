import React from 'react';
import NavBar from './componets/navegacion/NavBar.js';
import Video from './componets/videos/video';

export default function App() {
  return (
    <>
        <NavBar />
        <Video
        src="assets/videos/Londra.mp4"
        title="PAULO LONDRA || BZRP Music Sessions #23"
        description="41,753,197 vistas"
        />
    </>
  
  );
}

