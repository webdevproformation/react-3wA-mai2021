import React, { Component } from 'react';
import { NavLink , Link } from "react-router-dom";

class NavBar extends Component {
    state = {  }
    render() { 
        return (
            <nav className="navbar navbar-expand navbar-light bg-light px-3">
                <Link to="/" 
                    className="navbar-brand" 
                    >Jour2</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink 
                            to="/" 
                            className="nav-link" 
                            activeClassName="active"
                            exact>
                            Accueil</NavLink>
                    </li>
                    <li className="nav-item" >
                            <NavLink 
                                to="/produits" 
                                className="nav-link"
                                activeClassName="active">
                                Produits</NavLink>
                    </li>
                    <li className="nav-item">
                            <NavLink 
                                to="/nous-contacter" 
                                className="nav-link"
                                activeClassName="active">
                                    Contacter nous</NavLink>
                    </li>
                    <li className="nav-item">
                            <NavLink 
                                to="/albums" 
                                className="nav-link"
                                activeClassName="active">
                                    Albums</NavLink>
                    </li>
                </ul>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                    <NavLink 
                            to="/login" 
                            className="nav-link"
                            activeClassName="active">
                                Connexion</NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}
 
export default NavBar;