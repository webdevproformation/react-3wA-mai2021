import { Component } from 'react';
import { Link } from 'react-router-dom';

class Produit extends Component {
    state = {  }

    // cdm 
    componentDidMount() {
        const { id } = this.props.match.params;
        const listeProduit = [1,2,3,4,5];
        if( ! listeProduit.includes(parseInt(id))){
            // redirection vers la page 404 
            this.props.history.push("/not-found");
        } 
    }

    render() { 
        const { id } = this.props.match.params ; /** récupération de id dans l'url */
        return ( <div className="col">
            <img src="http://via.placeholder.com/1200x200" alt="" className="img-fluid my-3" />
            <h2>Produit { id }</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptatibus dolorum iste, sint libero cupiditate. Officiis, dignissimos? Delectus doloribus quas officiis excepturi debitis ex numquam quia laborum quidem magni. Corporis?</p>
            <div className="my-3 d-flex justify-content-end">
                <Link to="/produits" className="btn btn-dark">Retour à la liste des produits</Link>
            </div>
        </div> );
    }
}
export default Produit;