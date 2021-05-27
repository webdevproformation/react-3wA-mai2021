// dans ce fichier nous allons avoir toutes les méthodes http pour interroger le serveur sur la table / ressource posts 

import axios from "axios";

const urlApiPhoto = "https://jsonplaceholder.typicode.com/photos";

// read
export async function getAll(){
    let {data} = await axios.get( `${urlApiPhoto}` );
    return data; 
}

export async function get(id){
    let { data } = await axios.get( `${urlApiPhoto}/${id}` );
    return data; 
}

// create
export async function create(album){
      let reponse  = await axios.post(`${urlApiPhoto}` , album);
      console.log( reponse );
}

// update

// delete 

// rdv dans 16h25 bon café / pas questions 

