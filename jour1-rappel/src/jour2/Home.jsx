import { Component } from 'react';
/* import Condition from '../jour3/Condition';
import Validation from '../jour3/Validation';
import Formation from '../jour3/Formation'; */
import axios from "axios" ; 


class Home extends Component {
    state = { 
        articles : []
    }
    componentDidMount = async () => {
        let {data} = await axios.get("https://jsonplaceholder.typicode.com/posts"); // JSON
        //let info = axios.get("https://jsonplaceholder.typicode.com/posts"); // JSON
        // console.log(info) // return new Promise
        // demande => recevez l'information => latence lié au réseau 
        // mettre un délai 0.5s 1s 4s 
        // ATTEND la réponse avant de passer à la suite de l'exécution => programmation Asynchrone 
        // lancer des instructions et certaines instructions vont être exécuter APRES l'autre 
         console.log(data);
         this.setState({
            articles : data
         });
    }// rdv 14h10 bon appétit !!!!!!!!!!!!!!!
    render() { 
        return ( <>
            <ol>
                {this.state.articles.map((article , index) =><li key={index}>{article.title}</li>)}
            </ol>
            {/* <p>je suis le composant Home</p>
            <Condition />
            <Validation />
            <Formation /> */}
        </> );
    }
}
 
export default Home;