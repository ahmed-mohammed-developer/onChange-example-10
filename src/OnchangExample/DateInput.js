import { useState } from "react";

export default function ColorInput(){
    const [data, setDate] = useState("")

    function handleDateChange(event){
        setDate(event.target.value)
    }


    return(
        <>
        <input type="date" value={data} onChange={handleDateChange} />
        <p>{data}</p> 
        </>
    )
}