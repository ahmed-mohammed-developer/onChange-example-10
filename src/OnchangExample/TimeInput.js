import { useState } from "react";

export default function TimeInput(){
    const [time, setTime] = useState("")

    function handleTimeChange(event){
        setTime(event.target.value)
    }


    return(
        <>
        <input type="time" value={time} onChange={handleTimeChange} />
        <p>{time}</p> 
        </>
    )
}