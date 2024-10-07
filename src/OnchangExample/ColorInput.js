import { useState } from "react";

export default function ColorInput(){
    const [color, setColor] = useState("#000000")

    function handleColorChange(event){
        setColor(event.target.value)
    }


    return(
        <>
        <input type="color" value={color} onChange={handleColorChange} />
        <p>{color}</p> 
        </>
    )
}