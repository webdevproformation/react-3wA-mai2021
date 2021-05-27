import { Component } from 'react';
import Condition from '../jour3/Condition';
import Validation from '../jour3/Validation';


class Home extends Component {
    state = {  }
    render() { 
        return ( <>
            <p>je suis le composant Home</p>
            <Condition />
            <Validation />
        </> );
    }
}
 
export default Home;