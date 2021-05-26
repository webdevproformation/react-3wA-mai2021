import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NavBar extends Component {
    state = {  }
    render() { 
        return (
            <nav className="navbar navbar-expand navbar-light bg-light px-3">
                <Link to="/" className="navbar-brand">Jour2</Link>
                <ul className="navbar-nav">
                    <li className="nav-item"><Link to="/" className="nav-link">Accueil</Link></li>
                    <li className="nav-item"><Link to="/produits" className="nav-link">Produits</Link></li>
                    <li className="nav-item"><Link to="/nous-contacter" className="nav-link">Contacter nous</Link></li>
                </ul>
            </nav>
        );
    }
}
 
export default NavBar;