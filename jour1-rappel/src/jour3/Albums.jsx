import { Component } from 'react';
import { getAll } from "../services/Posts";

class Albums extends Component {
    state = { 
        albums : []
    }
    componentDidMount = async () => {
       let data = await getAll();
       let top100Albums = data.filter( (album) => { return parseInt(album.id) <= 100 } );
       this.setState({ albums : top100Albums });
    }
    render() { 
        return ( <div className="row">
            { this.state.albums.map( function (album, index){
                return (<div className="col-2" key={index}>
                <img src={album.thumbnailUrl} alt="" className="img-thumbnail" />
            </div>)
            } )}
        </div> );
    }
}
 
export default Albums;
