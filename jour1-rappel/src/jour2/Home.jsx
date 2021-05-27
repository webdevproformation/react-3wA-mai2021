import { Component } from 'react';
import Condition from '../jour3/Condition';
import Validation from '../jour3/Validation';
import Formation from '../jour3/Formation';


class Home extends Component {
    state = {  }
    render() { 
        return ( <>
            <p>je suis le composant Home</p>
            <Condition />
            <Validation />
            <Formation />
        </> );
    }
}
 
export default Home;