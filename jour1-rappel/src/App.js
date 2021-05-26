// import logo from './logo.svg';
import './App.css';

import Home from "./jour2/Home";
import Contact from "./jour2/Contact";
import Produits from "./jour2/Produits";
import Produit from "./jour2/Produit";
import { Route , Switch } from "react-router-dom";

import NavBar from './jour2/NavBar';
function App() {
  return (
    <div className="container">
        <header className="row">
          <div className="col">
            <NavBar />
          </div>
        </header>
        <main className="row">
          <div className="col">
            <Switch>
              <Route path="/produits" component={Produits}/>
              <Route path="/nous-contacter" component={Contact}/>
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </main>
    </div>
  );
}

export default App;
