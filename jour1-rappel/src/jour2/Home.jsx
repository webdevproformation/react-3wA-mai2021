import { Component } from 'react';
/* import Condition from '../jour3/Condition';
import Validation from '../jour3/Validation';*/
// import Formation from '../jour3/Formation'; 
/* import axios from "axios" ;  */
import {getAll , suppr} from "../services/Articles";
import {ToastContainer , toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import {log} from '../services/log';


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
        // let o = {id : 10 , nom : "totot"};
        toast.error(`la suppression de l'article ${id} a bien été réalisée`);
        log(`la suppression de l'article ${id} a bien été réalisée`);
        //toast.warning(JSON.stringify(o));
        // utiliser à la place des console.log()
        const cloneArticles = [...this.state.articles];
        this.setState({
            articles : cloneArticles.filter(item =>  item.id !== id )
        })
    }

    render() { 
        return ( <>
            {/* <Formation /> */}
            <ToastContainer />
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