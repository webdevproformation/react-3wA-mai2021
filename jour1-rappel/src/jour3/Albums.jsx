import { Component } from 'react';
import { getAll } from "../services/Posts";
import { Link } from 'react-router-dom';

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
                    <Link to={`/albums/${album.id}`}>
                        <img src={album.thumbnailUrl} alt="" className="img-thumbnail" />
                    </Link>
            </div>)
            } )}
        </div> );
    }
}
 
export default Albums;
