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
                    <NavLink to='/' style={{ textDecoration: 'none' }}>
                        <li className="navBar__item"><img className="home-img" src={home} alt="logo"/></li>
                    </NavLink>
                    <Link to='/category/MIX 1' style={{ textDecoration: 'none' }}>
                        <li className="navBar__item"><img className="home-img" src={explorar} alt="logo"/></li>
                    </Link>
                    <Link to='/category/MIX 2' style={{ textDecoration: 'none' }}>
                        <li className="navBar__item"><img className="home-img" src={sub} alt="logo"/></li>
                    </Link>
                    <Link to='/category/MIX 3' style={{ textDecoration: 'none' }}>
                        <li className="navBar__item"><img className="home-img" src={biblio} alt="logo"/></li>
                    </Link>
                    <Link to='/category/MIX 4' style={{ textDecoration: 'none' }}>
                        <li className="navBar__item"><img className="home-img" src={shorts} alt="logo"/></li>
                    </Link>
                    
        </ul>
      </nav>
      <div>
      <CartWidget/>
      </div>
      </header>
    );
};

export default NavBar;