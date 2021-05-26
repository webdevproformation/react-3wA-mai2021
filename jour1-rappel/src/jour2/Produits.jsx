import { Component } from 'react';
import { Link } from 'react-router-dom';

class Produits extends Component {
    state = { 
        produits : [
            {id : 1 , nom : "produit 1" , img : "http://via.placeholder.com/400x200"},
            {id : 2 , nom : "produit 2" , img : "http://via.placeholder.com/400x200"},
            {id : 3 , nom : "produit 3" , img : "http://via.placeholder.com/400x200"},
            {id : 4 , nom : "produit 4" , img : "http://via.placeholder.com/400x200"},
            {id : 5 , nom : "produit 5" , img : "http://via.placeholder.com/400x200"}
        ] }
    render() { 
        return ( 
        <div className="row my-4">
            {this.state.produits.map((produit , index) => { 
                return ( 
                    <div className="col-4 mb-2" key={index}>
                        <article>
                            <img src={produit.img} alt="" className="img-fluid rounded"/>
                            <div className="d-flex justify-content-between mt-2">
                                <h2 className="mb-0">{produit.nom}</h2>
                                <Link to={`/produits/${produit.id}`} className="btn btn-warning">lire la suite</Link>
                                {/**  cliquer sur le bouton produits/id */}
                            </div>
                        </article>
                    </div>
                )
            } )}
        </div> );
    }
}
 
export default Produits;