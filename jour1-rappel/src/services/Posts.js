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
export async function update(album){
    let reponse = await axios.put(`${urlApiPhoto}/${album.id}` , {nom : "album modifié"});
    console.log( reponse );
}

// delete
export async function suppr(id){
    let reponse = await axios.delete(`${urlApiPhoto}/${id}`);
    console.log( reponse );
} 

// rdv dans 16h25 bon café / pas questions 

