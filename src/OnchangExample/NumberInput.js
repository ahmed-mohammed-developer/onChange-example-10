import { useState } from "react";

export default function NumberInput(){
    const [number, setNumber] = useState(0)

    function handleNumberChange(event){
        setNumber(Number(event.target.value))
    }


    return(
        <>
        <input type="number" value={number} onChange={handleNumberChange} />
        <p>{number}</p> 
        </>
    )
}