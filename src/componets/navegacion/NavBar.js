import React from "react";
import '../style/NavBar.css';
import logo from '../imagenes/logo.png';

const NavBar = () => {
    return (
      <header className="header">
      <div className="logo-container">
        <div >
        <img className="logo-img" src={logo} alt="logo"/>
        </div> 
      </div>
      <div>
      <input type="text" placeholder="buscar" required></input>
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
            <a href="/">Notificaciones</a>
          </li>
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