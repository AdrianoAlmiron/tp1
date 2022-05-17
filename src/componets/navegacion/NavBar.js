import React from "react";
import '../style/NavBar.css';

import logo from '../imagenes/logo.png';
import home from '../imagenes/home.png';
import explorar from '../imagenes/explorar.png';
import biblio from '../imagenes/biblio.png';
import shorts from '../imagenes/shorts.png';
import sub from '../imagenes/sub.png';

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
                    <Link to='/category/List1' style={{ textDecoration: 'none' }}>
                        <li className="navBar__item"><img className="home-img" src={explorar} alt="logo"/></li>
                    </Link>
                    <Link to='/category/List2' style={{ textDecoration: 'none' }}>
                        <li className="navBar__item"><img className="home-img" src={sub} alt="logo"/></li>
                    </Link>
                    <Link to='/category/List3' style={{ textDecoration: 'none' }}>
                        <li className="navBar__item"><img className="home-img" src={biblio} alt="logo"/></li>
                    </Link>
                    <Link to='/category/List4' style={{ textDecoration: 'none' }}>
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