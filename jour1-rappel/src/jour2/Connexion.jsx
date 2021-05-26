import React from 'react';

class Connexion extends React.Component {
    // initialiser le state lorsque l'on lance le composant
    state = { 
        identifiants : {
            login : "",
            password : ""
        }
    }

    submit = e => {
        e.preventDefault();
        // bloquer le rafraichissement automatique de la page pour faire des traitements 
        // vérifier que les idenfiants sont corrects 
        // si ok => redirection sur le tableau de bord du back office
        // si ko => mettre des messages d'erreur
        console.log(this.state);
    }

    change = e => {
        const valeurSaisie = e.currentTarget.value; // info saisie
        const nameInputUtilise = e.currentTarget.name; // nom du champ utilisé
        const cloneIdentifiant = {...this.state.identifiants}; // clone
        cloneIdentifiant[nameInputUtilise] = valeurSaisie;  // modifier le clone 
        this.setState({
            identifiants : cloneIdentifiant
        });// bon café ! rdv 16h15 !! @ toute suite 
    }

    render() { 
        let {login , password} =  this.state.identifiants; 
        return ( 
            <div className="col d-flex justify-content-center my-5 text-center">
                <form onSubmit={ this.submit } className="w-25">
                    <h1 className="fs-4">Connexion au Back Office</h1>
                    <div className="form-group">
                        <label htmlFor="login">login</label>
                        <input 
                            type="text" 
                            className="form-control my-3" 
                            id="login" 
                            name="login" 
                            value={login}
                            onChange={this.change} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">password</label>
                        <input 
                            type="text" 
                            className="form-control my-3" 
                            id="password" 
                            name="password" 
                            value={password}
                            onChange={this.change} />
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-success" />
                    </div>
                </form>
            </div>
         );
    }
}
 
export default Connexion;