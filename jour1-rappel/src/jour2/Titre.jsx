import { useState } from 'react';
const Titre = () => {
    let [taille, setTaille] = useState(6);
    function augmenter(){
        setTaille(taillePrec => {
            if(taillePrec > 1) return taillePrec - 1;
            return 1; // remplacé par undefined - 1 = undefined
        });
    }
    function diminuer(){
        setTaille(taillePrec => {
            if(taillePrec < 6 ) return taillePrec + 1;
            return 6;
        })
    }
    return (
        <>
            <p className={`fs-${taille}`}>Exo 1</p>
            <button className="btn btn-success" onClick={augmenter}>augmenter</button>
            <button className="btn btn-dark ms-2" onClick={diminuer}>diminuer</button>
        </>
    );
}

export default Titre;