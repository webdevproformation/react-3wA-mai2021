import {useEffect} from "react";

export const Article = (props) => {
    console.log(props);

    useEffect(() => {
        console.log("le composant vient de finir d'être ajouté au DOM");
        let titres = ["premier","deuxieme"];
        if(!titres.includes( props.match.params.nom )){
            props.history.push("/not-found");
        }
    });
    //cdm
    //cdu=> rdv dans 6 min => 11h17 bon café @ toute suite !! 

    /* function toto(){
        alert("je suis exécuté par le render");
        return <p>toto</p>;
    } */
    return (
        <>
            <h1>je suis un article unique</h1>
            <p>{props.match.params.nom}</p>
            {/*toto()*/}
        </>
    )
}
