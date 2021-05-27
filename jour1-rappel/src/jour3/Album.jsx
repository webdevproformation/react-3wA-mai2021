import React from 'react';
import { get } from "../services/Posts" ;
class Album extends React.Component {
    state = { 
        album : {}
     }
     componentDidMount = async()  =>{
        const id = this.props.match.params.id ;
        const data = await get(id) ;
        this.setState({
            album :  data
        })
     }
    render() { 
        const {id, title , url} = this.state.album
        return ( <>
            <h1>Album numéro {id}</h1>
            <img src={url} alt="" className="img-thumbnail" />
            <p>{title}</p>
        </> );
    }
}
export default Album;