import { useState } from "react";

export default function RangeInput(){
    const [range, setRange] = useState(50)

    function handleRangeChange(event){
        setRange(event.target.value)
    }


    return(
        <>
        <input type="range" value={range} onChange={handleRangeChange} />
        <p>{range}</p> 
        </>
    )
}