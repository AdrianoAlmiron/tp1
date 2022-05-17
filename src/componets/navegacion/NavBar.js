import React from "react";
import '../style/NavBar.css';
import logo from '../imagenes/logo.png';
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
        <Link to='/category/List1' style={{ textDecoration: 'none' }}>
                        <li className="navBar__item">Mix 1</li>
                    </Link>
                    <Link to='/category/List2' style={{ textDecoration: 'none' }}>
                        <li className="navBar__item">Mix 2</li>
                    </Link>
                    <Link to='/category/List3' style={{ textDecoration: 'none' }}>
                        <li className="navBar__item">Mix 3</li>
                    </Link>
                    <Link to='/category/List4' style={{ textDecoration: 'none' }}>
                        <li className="navBar__item">Mix 4</li>
                    </Link>
        </ul>
      </nav>
      <CartWidget/>
      </header>
    );
};

export default NavBar;