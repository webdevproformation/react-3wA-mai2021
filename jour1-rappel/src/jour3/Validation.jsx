import { Component } from 'react';
import Joi from "@hapi/joi";

class Validation extends Component {
    state = { 
        etudiant : {
            nom : "blabla",
            age : false
        }
    }

    schemaEtudiant = Joi.object({
        nom : Joi.string().min(3).max(50),
        age : Joi.number()
    });

    render() { 
        let verif = this.schemaEtudiant.validate(this.state.etudiant, {abortEarly: false} );
        console.log(verif);
        return ( <p>test</p> );
    }
}
 
export default Validation;