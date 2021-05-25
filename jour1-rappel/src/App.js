// import logo from './logo.svg';
import './App.css';
import Bouton from './jour1/Bouton';
import Titre from './jour1/Titre';
import Liste from './jour1/Liste';
import Article from './jour1/Article';
import Sommaire from './jour1/Sommaire';
import ArticleBlog from './jour1/ArticleBlog';

// SASS 
// import {Article , Liste , Titre } from './jour1';
function App() {
  return (
    <div className="container">
      <header className="row">
          <div className="alert alert-success">
            Bootstrap est bien installé !!
          </div>
      </header>
      <section  className="row">
          <div className="col">
            <Bouton />
          </div>
          <div className="col">
            <Titre />
          </div>
          <div className="col">
            <Liste />
          </div>
          <div className="col">
            <Article />
          </div>
      </section>
      <section  className="row">
        <div className="col">
          <Sommaire />
        </div>
        <div className="col">
          <ArticleBlog />
        </div>
      </section>
    </div>
  );
}

export default App;
