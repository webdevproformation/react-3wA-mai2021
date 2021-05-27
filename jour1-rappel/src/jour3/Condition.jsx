import React from 'react';

class Condition extends React.Component {
    state = { 
        liste1 : ["Lundi","Mardi","Mercredi"]
    }
    render() { 
        return ( <>
            <h1>Autre manière de faire des conditions dans un composant</h1>
            { this.state.liste1.length > 0 && <ul>
                                                {this.state.liste1.map( (jour , index) => 
                                                    <li key={index}>{jour}</li>)}
                                                </ul> }
        </> );
    }
}
 
export default Condition;