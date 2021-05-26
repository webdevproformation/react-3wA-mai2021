import { Component } from 'react';

class Produit extends Component {
    state = {  }
    render() { 
        const { id } = this.props.match.params ; /** récupération de id dans l'url */
        return ( <div className="col">
            <img src="http://via.placeholder.com/1200x200" alt="" className="img-fluid my-3" />
            <h2>Produit { id }</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptatibus dolorum iste, sint libero cupiditate. Officiis, dignissimos? Delectus doloribus quas officiis excepturi debitis ex numquam quia laborum quidem magni. Corporis?</p>
        </div> );
    }
}
 
export default Produit;