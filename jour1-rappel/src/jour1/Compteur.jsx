import { Component } from 'react';
class Compteur extends Component {
    state = { 
        nombre : 4 ,
        taches : ["Action 1", "Action 2", "Action 3"]
    }
    affichage(){
        if(this.state.nombre > 2){
            return <div className="alert alert-primary">le chiffre est supérieur à 2</div>
        }
        else{
            return <div className="alert alert-danger">le chiffre est inférieur à 2</div>
        }
    }
    render() { 
        return ( 
            <>
            <h2>Exemple de boucle</h2>
            <ul>
                {this.state.taches.map( (item, index) => <li key={index}>{item}</li> )}
            </ul>
            <h2>Exemple de if </h2>
            {this.affichage()}
            {/* si this.state.nombre > 2 alors zone primary */}
            {/* si this.state.nombre <= 2 alors zone rouge */}
            </>
         );
    }
}
 
export default Compteur;