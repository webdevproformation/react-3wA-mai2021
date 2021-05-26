import { Component } from 'react';

class Element extends Component {
    state = { 
        valeur : 10
    }
    action = param => {
        console.log(param); // très pratique lorsque l'on va avoir plusieurs composants qui envoie des
        // informations vers un parent 
    }
    render() { 
        return ( 
            <button className="btn btn-warning" onClick={() => {this.action({info : 1234})}}>Action</button>
         );
    }
}
 
export default Element;