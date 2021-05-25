import { useState } from 'react';
const Menu = () => {
   let [titre] = useState("Mon Super Site");
   let [items] = useState(["Accueil", "Présentation", "Nous Contacter"]);
   let [annee] = useState((new Date()).getFullYear());
   return (
       <div>
        <hr />
        <nav className="d-flex align-items-center justify-content-between">
            <h1>{titre}</h1>
            <ul className="list-inline">
                <li className="list-inline-item">{items[0]}</li>
                <li className="list-inline-item">{items[1]}</li>
                <li className="list-inline-item">{items[2]}</li>
            </ul>
            <time>{annee}</time>
        </nav>
        <hr />
        </div>
   );
};
export default Menu ; 