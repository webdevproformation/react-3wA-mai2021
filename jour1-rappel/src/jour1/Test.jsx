import {useState} from "react";

function Test (){
    let [v] = useState(10);
    return ( 
        <>{v}</>
    )
}

export default Test;