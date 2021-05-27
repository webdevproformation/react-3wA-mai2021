import { Component } from 'react';
import { getAll , suppr , update } from "../services/Posts";
import { Link } from 'react-router-dom';
import AlbumCreate from './AlbumCreate';

class Albums extends Component {
    state = { 
        albums : []
    }
    componentDidMount = async () => {
       let data = await getAll();
       let top100Albums = data.filter( (album) => { return parseInt(album.id) <= 100 } );
       this.setState({ albums : top100Albums });
    }

    modif = async(album) => {
        //console.log(album)
        await update( album );
    }
    suppr = async (id) => {
        console.log(id);
        await suppr( id );
        const cloneAlbum = [...this.state.albums];
        /* console.log(cloneAlbum) */
        this.setState({
            albums :  cloneAlbum.filter( (item) => { return item.id !== id  })
        }) 
        
    }
    render() { 
        return ( <>
            <AlbumCreate />
            <div className="row">
            { this.state.albums.map( (album, index) => {
                return (<div className="col-2" key={index}>
                    <Link to={`/albums/${album.id}`}>
                        <img src={album.thumbnailUrl} alt="" className="img-thumbnail" />
                    </Link>
                    <div className="d-flex justify-content-between my-3">
                        <button className="btn btn-sm btn-warning" onClick={ () => {this.modif(album)} }>modif</button>
                        <button className="btn btn-sm btn-danger me-2" onClick={ () => {this.suppr(album.id)} }>suppr</button>
                    </div>
            </div>)
            } )}
        </div> 
        </>);
    }
}
 
export default Albums;
