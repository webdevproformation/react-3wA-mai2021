import { Component } from 'react';
class Contact extends Component {
    state = { 
        demande : {
            nom : "John DOE",
            email : "",
            commentaire : ""
        },
        errors : {} // stocker le ou les erreurs détectées lors de la saisie du formulaire 
    }
    validation = () => {
        const cloneDemande = {...this.state.demande};
        const erreurs = {};
        if( cloneDemande.nom.length < 5 ){
            erreurs.nom = "le champ nom doit avoir au moins 5 caractères";
        }
        const verif 	= /^[a-z]+@[a-z]{2,}[.][a-z]{2,3}$/ ;
        if( !verif.exec(cloneDemande.email)  ){
            erreurs.email = "le champ email n'est pas conforme";
        }
        if( cloneDemande.commentaire.length < 5 ){
            erreurs.commentaire = "le champ commentaire doit avoir au moins 5 caractères";
        }
        // si variable erreurs est objet vide => true 
        // sinon erreurs => récupérer les informations et les afficher à l'écran 
        //if(Object.keys(erreurs).length ==  0 ){
        //    return true;
        //}
        // return erreurs ;
        // @hapi/joi yarn add @hapi/joi
        return Object.keys(erreurs).length === 0  ? {} : erreurs ;
    }

    submit = e => {
        e.preventDefault();
        const verif = this.validation();
        if( Object.keys(verif).length !== 0 ){
            this.setState({
                errors : verif
            })
        } else {
            this.setState({
                errors : {}
            })
        }
        // Object.values() // permet de transformer un objet = { id : 1, titre : "bonjour" }
        // Object.values(objet) => [1, "bonjour"]
        // Object.keys(objet) => ["id", "titre"]
        console.log(Object.values(this.state.errors))

    }
    change = e => {
        const valeurSaisie = e.currentTarget.value;
        const nomChamp = e.currentTarget.name;
        const cloneDemande = {...this.state.demande};
        cloneDemande[nomChamp] = valeurSaisie;
        this.setState({
            demande : cloneDemande
        });
    }

    messageAlert = () => {
        if(Object.keys(this.state.errors).length > 0){
            return (<div className="alert alert-danger pb-0">
                <ul>
                    {Object.values(this.state.errors).map( (message, index) => { 
                        return <li key={index}>{message}</li>
                    })}
                </ul>
            </div>)
        }

    }

    render() { 
        const { nom , email , commentaire } = this.state.demande ;
        return ( 
            <div className="col">
                <h1>Nous contacter</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, labore?</p>
                <form onSubmit={this.submit} className="row">
                    <div className="col-6">
                        <label htmlFor="nom">votre nom</label>
                        <input 
                            type="text" 
                            name="nom" 
                            className="form-control" 
                            id="nom" 
                            value={nom}
                            onChange={this.change}
                            />
                    </div>
                    <div className="col-6">
                        <label htmlFor="email">votre email</label>
                        <input 
                            type="email" 
                            name="email" 
                            className="form-control" 
                            id="email" 
                            value={email}
                            onChange={this.change}
                            />
                    </div>
                    <div className="col-12">
                        <label htmlFor="commentaire">votre commentaire</label>
                        <textarea 
                            name="commentaire" 
                            id="commentaire" 
                            className="form-control"
                            value={commentaire}
                            onChange={this.change}></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                        <input type="submit" className="btn btn-outline-dark btn-lg my-4" />
                    </div>
                </form>
                { this.messageAlert() }
            </div>
         );
    }
}
 
export default Contact;