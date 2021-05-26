import React from 'react';

class Social extends React.Component {
    state = { 
        nombre : 0
     }
    
     augmenter(){
        this.setState({
            nombre : this.state.nombre + 1
        })
     }

     diminuer = () => {
        this.setState({
            nombre : this.state.nombre - 1
        })
     }

    render() { 
        return ( 
            <>
                <button className="btn btn-warning btn-sm" onClick={this.diminuer}>-</button>
                <span className="mx-4">{this.state.nombre}</span>
                <button className="btn btn-success btn-sm" onClick={this.augmenter.bind(this)}>+</button>
            </>
         );
    }
}
 
export default Social;