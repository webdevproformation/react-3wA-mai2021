
export  let a = 10; // number

export function calcul(){ // fonction locale => portée limitée au fichier 
    console.log(10 + 2);
}

export  class Resultat{ // class => possible de les utiliser dans d'autres fichier 12-module.html
    uneMethode(){
        console.log("j'utilise une class qui est dans une autre fichier ");
    }
}

// si vous n'ajoutez pas avant la création d'une variable 
