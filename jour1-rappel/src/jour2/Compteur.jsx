import {useState} from 'react' ;

/* function getValeurInitialCompteur(){
    console.log("plein de traitement");
    return 8;
} */

function Compteur() {
   let [valeurInitiale , setValeur ] =  useState(() => { 
        //console.log("plein de traitement");
        return 8; // fonction anonyme qui ne sera exécuté 1 seule fois (au chargement du composant)
    } 
   );
    //if(true){ // erreur React Hook "useState" is called conditionally.
        //let [couleur, setCouleur] =  useState("#000");
    //}
   /*  useState();
    useState();
    useState(); */

    /* state = { 
        valeurInitiale : 8,
        couleur : "#000"
    } */

   // la fonction qui va permettre de modifier le state 
   // exactement la même chose this.setState() => quand on est dans une class 
   // nommer comme on veut => cette fonction que l'on va utiliser pour modifier
   function augmenter(){
       // ça fonctionne MAIS ce n'est pas la bonne manière 
    //   setValeur(valeurInitiale + 1);
       // de modifier le state
    setValeur((valeurPrec) => valeurPrec + 1);
    setValeur((valeurPrec) => valeurPrec + 1); // + 2
   }
   return (
        <>
            <button onClick={augmenter} className="btn btn-outline-success">augmenter</button>
            <span className="ms-3">{valeurInitiale}</span>
        </>

   )
}
export default Compteur;