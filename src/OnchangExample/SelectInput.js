import { useState } from "react";

export default function SelectInput(){
    const [option, setOption] = useState('')

    function handleSelectChange(e){
        setOption(e.target.value)
    }
    return(
        <>
        <select value={option} onChange={handleSelectChange} >
            <option value=""> select an option</option>
            <option value="Option 1"> Option 1</option>
            <option value="Option 2"> Option 2</option>
        </select>
        <p>{option}</p>
        </>
    )
}