import axios from "axios";

const urlApiPosts = "https://jsonplaceholder.typicode.com/posts" ;

export async function getAll(){
    let {data} = await axios.get(`${urlApiPosts}`);
    // JSON
    //let info = axios.get("https://jsonplaceholder.typicode.com/posts"); // JSON
    // console.log(info) // return new Promise
    // demande => recevez l'information => latence lié au réseau 
    // mettre un délai 0.5s 1s 4s 
    // ATTEND la réponse avant de passer à la suite de l'exécution => programmation Asynchrone 
    // lancer des instructions et certaines instructions vont être exécuter APRES l'autre 
        //console.log(data);
    return data;
}

export async function suppr(id){
    let response = await axios.delete(`${urlApiPosts}/${id}`);
    console.log(response);
}