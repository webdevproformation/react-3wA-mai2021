import { useState } from 'react';

const Formulaire = () => {
    let [etiquettes] = useState(["prénom", "nom", "age"]);
    let [pays] = useState(["france", "belgique","allemagne"]);

    return (
    <form action="">
    <label htmlFor="">{etiquettes[0]}</label>
    <input type="text" className="form-control" />
    <label htmlFor="">{etiquettes[1]}</label>
    <input type="text" className="form-control" />
    <label htmlFor="">{etiquettes[2]}</label>
    <input type="number" className="form-control" />
    <label htmlFor="">pays</label>
    <select name="" id="" className="form-select">
        <option value="">Choisir un pays</option>
        <option value={pays[0]}>{pays[0]}</option>
        <option value={pays[1]}>{pays[1]}</option>
        <option value={pays[2]}>{pays[2]}</option>
    </select>
    </form>);
}

export default Formulaire ;