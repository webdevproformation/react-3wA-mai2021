// dans ce fichier nous allons avoir toutes les méthodes http pour interroger le serveur sur la table / ressource posts 

import axios from "axios";

export async function getAll(){
    let {data} = await axios.get( "https://jsonplaceholder.typicode.com/photos" );
    return data; 
}


