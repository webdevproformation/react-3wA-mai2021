import { Component } from 'react';
/* import Condition from '../jour3/Condition';
import Validation from '../jour3/Validation';*/
// import Formation from '../jour3/Formation'; 
/* import axios from "axios" ;  */
import {getAll , suppr} from "../services/Articles";


class Home extends Component {
    state = { 
        articles : []
    }
    componentDidMount = async () => {
        let data = await getAll() ;
         this.setState({
            articles : data
         });
    }

    suppr = async (id) => {
        await suppr(id);
        //alert(id);
        
        const cloneArticles = [...this.state.articles];
        this.setState({
            articles : cloneArticles.filter(item =>  item.id !== id )
        })
    }

    render() { 
        return ( <>
            {/* <Formation /> */}
            <ol>
                {this.state.articles.map((article , index) => <li key={index}>{article.title} <button className="btn btn-danger btn-sm my-1" onClick={() => this.suppr(article.id)}>supprimer</button></li> )}
            </ol>
            {/* <p>je suis le composant Home</p>
            <Condition />
            <Validation />
            <Formation /> */}
        </> );
    }
}
 
export default Home;