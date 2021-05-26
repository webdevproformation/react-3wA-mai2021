import React, { Component } from 'react';

class NavBar extends Component {
    state = {  }
    render() { 
        return (
            <nav className="navbar navbar-expand navbar-light bg-light px-3">
                <a href="#" className="navbar-brand">Jour2</a>
                <ul className="navbar-nav">
                    <li className="nav-item"><a href="#" className="nav-link">Accueil</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Produits</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Contacter nous</a></li>
                </ul>
            </nav>
        );
    }
}
 
export default NavBar;