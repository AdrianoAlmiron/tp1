import React from "react";
import '../style/NavBar.css';

import logo from './img/logo.png';
import home from './img/home.png';
import explorar from './img/explorar.png';
import biblio from './img/biblio.png';
import shorts from './img/shorts.png';
import sub from './img/sub.png';


import CartWidget from '../CartWidget';
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
      <header className="header">    
      <div className="logo-container">
      <NavLink to='/'>
        <div >
        <img className="logo-img" src={logo} alt="logo"/>
        </div>
        </NavLink> 
      </div>
      <div>
        <input className="buscador" type="text" placeholder="Buscar" required></input>
      </div>
      <nav>
        <ul className="nav-container">
                        <li className="navBar__item">
                          <NavLink to='/' style={{ textDecoration: 'none' }}>
                          <img className="home-img" src={home} alt="logo"/>
                          </NavLink>
                        </li>
                        <li className="navBar__item">
                          <Link to='/category/MIX 1' style={{ textDecoration: 'none' }}>
                          <img className="home-img" src={explorar} alt="logo"/>
                          </Link>
                        </li>                  
                        <li className="navBar__item">
                          <Link to='/category/MIX 2' style={{ textDecoration: 'none' }}>
                          <img className="home-img" src={sub} alt="logo"/>
                          </Link>
                        </li>                      
                        <li className="navBar__item">
                          <Link to='/category/MIX 3' style={{ textDecoration: 'none' }}>
                          <img className="home-img" src={biblio} alt="logo"/>
                          </Link>
                        </li>                   
                        <li className="navBar__item">
                          <Link to='/category/MIX 4' style={{ textDecoration: 'none' }}>
                          <img className="home-img" src={shorts} alt="logo"/>
                          </Link>
                        </li>
                        <li className="navBar__item">
                          <Link to='/cart' style={{ textDecoration: 'none' }}>
                          <img className="home-img" src={sub} alt="logo"/>
                          <CartWidget/>
                          </Link>
                        </li>
        </ul>
      </nav>
      </header>
    );
};

export default NavBar;