import React from "react";
import '../style/NavBar.css';
import logo from '../imagenes/logo.png';
import CartWidget from '../CartWidget';

const NavBar = () => {
    return (
      <header className="header">
        
      <div className="logo-container">
        <div >
        <img className="logo-img" src={logo} alt="logo"/>
        </div> 
      </div>
      <div>
      <input className="buscador" type="text" placeholder="Buscar" required></input>
      </div>

      <nav>
        <ul className="nav-container">
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/">Crear</a>
          </li>
          <li>
            <a href="/">Mi Mix</a>
          </li>
          <CartWidget/>
          <li>
            <a href="/">Perfil</a>
          </li>
        </ul>
      </nav>

      <select className="select-language">
        <option value="" selected disabled>
         Aplicaciones
        </option>
        <option value="">YoutubeKids</option>
        <option value="">YoutubeTV</option>
      </select>
      </header>
    );
};

export default NavBar;