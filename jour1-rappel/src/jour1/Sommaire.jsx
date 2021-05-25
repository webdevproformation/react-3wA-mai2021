import { Component } from 'react';

class Sommaire extends Component {
    state = { 
        auteur : "Moi",
        date : new Date(),
        items : [
            "partie 1",
            "partie 2",
            "partie 3",
            "partie 4",
        ]
     }
    render() { 
        return ( <>
            <div className="card">
                <header className="card-header d-flex align-items-center justify-content-between">
                    <h2>Voici le sommaire </h2>
                    <time>{this.state.date.getFullYear()}</time>
                </header>
                <div className="card-body">
                    <ul>
                        <li>{this.state.items[0]}</li>
                        <li>{this.state.items[1]}</li>
                    </ul>
                </div>
                <footer className="card-footer">
                    <p>{this.state.auteur}</p>
                </footer>
            </div>
        </> );
    }
}
 
export default Sommaire;