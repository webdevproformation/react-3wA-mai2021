import { Component } from 'react';
import Joi from "@hapi/joi";

class Formation extends Component {
    state = { 
        nom : "",
        duree : "",
        unite : "",
        url : ""/* ,
        email : "" */
    }
   schemaFormation = Joi.object({
        nom : Joi.string().min(3).max(20),
        duree : Joi.number().integer().greater(0) ,
        unite : Joi.any().allow("jour" , "mois" , "annee" , "heure"),
        url : Joi.string().uri()/*  , 
        email : Joi.string().email() , */
    }) 

    render() { 
        console.log(this.schemaFormation.validate(this.state ,{ abortEarly : false}));
        return ( <>Formation</> );
    }
}
 
export default Formation;