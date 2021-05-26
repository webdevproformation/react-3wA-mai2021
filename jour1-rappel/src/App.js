// import logo from './logo.svg';
import './App.css';

import Home from "./jour2/Home";
import Contact from "./jour2/Contact";
import Produits from "./jour2/Produits";
import Produit from "./jour2/Produit";
import NavBar from './jour2/NavBar';

import Footer from "./jour2/Footer";
import CGV from "./jour2/Cgv";
import MentionLegale from "./jour2/Mention-legale";
import NotFound from './jour2/Not-found';

import { Route , Switch , Redirect } from "react-router-dom";


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
              <Route path="/produits/:id" component={Produit}/>
              <Route path="/produits" component={Produits}/>
              <Route path="/nous-contacter" component={Contact}/>
              <Route path="/mention" component={MentionLegale}/>
              <Route path="/not-found" component={NotFound}/>
              <Route path="/cgv" component={CGV}/>
              <Route path="/" exact component={Home} />
              <Redirect to="/not-found" />
            </Switch>
          </div>
        </main>
        <footer className="row">
          <div className="col">
            <Footer />
          </div>
        </footer>
    </div>
  );
}

export default App;
