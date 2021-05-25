import React from 'react';
class Info extends React.Component {
    state = { 
        nombre : 6
    }
    augmenter(){
       // alert("je viens de cliquer sur le bouton");
       // éviter la perte de contexte du mot clé this 
       this.setState({ nombre : this.state.nombre + 1 });
       console.log(this);
    }
    diminuer = () => { // fonction fléchée
        console.log(this)
        this.setState({ nombre : this.state.nombre - 1 });
    }
    fontSize = () => {
        return "fs-"+ this.state.nombre;
    }
    render() { 
        return ( 
            <>
                <p className={this.fontSize()}>Bonjour { this.state.nombre }</p>
                <button onClick={this.augmenter.bind(this)}>Augmenter la police</button>
                <button onClick={this.diminuer}>Diminuer la police</button>
            </>
         );
    }
}
export default Info;