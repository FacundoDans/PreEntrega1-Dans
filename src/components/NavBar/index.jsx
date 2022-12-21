import React from "react";
import "../NavBar/navBar.css";
import CartWidget from '../CartWidget'

export const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav-brand">
            <a className="nav-link" href="#">Marca</a>
                </div>
            <ul className="nav-list">
            <li>
                <a className="nav-link" href="#">Inicio</a>
            </li>
            <li>
                <a className="nav-link" href="#">Categoria</a>
            </li>
            <li>
                <a className="nav-link" href="#">
                    <CartWidget />
                </a>
            </li>

            </ul>
            </nav>
        </div>
    ); 
}

export default NavBar;