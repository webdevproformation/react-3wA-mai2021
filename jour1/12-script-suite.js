// Les 3 fonctions que l'on a créées sont locales
// uniquement à utiliser dans le fichier encours 
function addition(){
    console.log(this.a + this.b);
}

function multiplication(){
    console.log(this.a * this.b);
}

export function soustraction(){
    console.log(this.a - this.b);
}
// c'est cet objet que l'on va vouloir utiliser dans d'autres fichiers => .html

let objet = {
    a : 10 ,
    b : 20 ,
    addition : addition,
    multiplication : multiplication,
    soustraction : soustraction,
}

export default objet; // tous les composants utilisent cette syntaxe pour l'utiliser dans un autre composant 
// dans un fichier il ne peut y avoir qu'un seul export default