import React from 'react';
import NavBar from './componets/navegacion/NavBar.js';
import Titulo from './componets/Titulo.js';
import Video from './componets/videos/video';
import Video2 from './componets/videos/Video2';
import FormContainer from './componets/FormContainer.js';

export default function App() {

  const tit= 'Ya porbaste el chiquito ahora proba el grandote..'
  const subTit= 'Alfajor GRANDOTE TRIPLE SABOR'
  return (
    <>
        <NavBar />
        <Video
        src="assets/videos/Londra.mp4"
        title="PAULO LONDRA || BZRP Music Sessions #23"
        description="41,753,197 vistas"
        />
        <Video2
        src="assets/videos/Rene.mp4"
        title="Residente || BZRP Music Sessions #46"
        description="89,753,197 vistas"
        />
        <Titulo titulo= { tit } subTit= { subTit } />
        <FormContainer />
    </>
    
  
  );
}

