import React from "react";
import "../NavBar/navBar.css";
import CartWidget from '../CartWidget';
import {NavLink} from 'react-router-dom';

export const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav-brand">
            <NavLink className="nav-link" to='/'>Marca</NavLink>
                </div>
            <ul className="nav-list">
            <li>
                <NavLink className="nav-link" to='/categoria/consola'>Consolas</NavLink>
            </li>
            <li>
                <NavLink className="nav-link" to='/categoria/perifericos'>Perifericos</NavLink>
            </li>
            <li>
                <NavLink className="nav-link" to='/cart'>
                    <CartWidget />
                </NavLink>
            </li>

            </ul>
            </nav>
        </div>
    ); 
}

export default NavBar;