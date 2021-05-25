import { useState } from 'react';

const Formulaire = () => {
    let [etiquettes] = useState(["prénom", "nom", "age"]);
    let [pays] = useState(["france", "belgique","allemagne"]);

    return (
    <form action="">
    <label for="">{etiquettes[0]}</label>
    <input type="text" class="form-control" />
    <label for="">{etiquettes[1]}</label>
    <input type="text" class="form-control" />
    <label for="">{etiquettes[2]}</label>
    <input type="number" class="form-control" />
    <label for="">pays</label>
    <select name="" id="" class="form-select">
        <option value="">Choisir un pays</option>
        <option value={pays[0]}>{pays[0]}</option>
        <option value={pays[1]}>{pays[1]}</option>
        <option value={pays[2]}>{pays[2]}</option>
    </select>
    </form>);
}

export default Formulaire ;