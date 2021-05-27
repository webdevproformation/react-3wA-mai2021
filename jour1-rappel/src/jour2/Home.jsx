import { Component } from 'react';
import Condition from '../jour3/Condition';

class Home extends Component {
    state = {  }
    render() { 
        return ( <>
            <p>je suis le composant Home</p>
            <Condition />
        </> );
    }
}
 
export default Home;