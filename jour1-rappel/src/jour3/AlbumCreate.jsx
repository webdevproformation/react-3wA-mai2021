import { Component } from 'react';
import { create } from "../services/Posts";
import Joi from "@hapi/joi";

class AlbumCreate extends Component {
    state = { 
        album : {
            nom : ""
        }
    }
    schemaAlbum = Joi.object({
        nom : Joi.string().min(3).max(50)
    })

    submit = async (e) => {
        e.preventDefault();
        /* console.log(this.state.album); */
        // attention il faut OBLIGATOIREMENT faire une vérification avant d'envoyer les infos vers le serveur 
        const { value , error} = this.schemaAlbum.validate( this.state.album );
        if(error === undefined){
            await create(value);
        }
    }
    change = (e) => {
        const valeur = e.currentTarget.value;
        const cloneAlbum = {...this.state.album};
        cloneAlbum.nom = valeur;
        this.setState({
            album : cloneAlbum
        });
    }

    render() { 
        return ( <form onSubmit={this.submit} className="row">
            <div className="form-group col-3">
                <label htmlFor="nom">Nom</label>
                <input 
                    type="text" 
                    id="nom" 
                    name="nom" 
                    className="form-control"
                    value={this.state.nom} 
                    onChange={this.change}
                    />
            </div>
            <div className="form-group">
                <input type="submit" className="btn btn-success my-3" />
            </div>
        </form> );
    }
}
 
export default AlbumCreate;