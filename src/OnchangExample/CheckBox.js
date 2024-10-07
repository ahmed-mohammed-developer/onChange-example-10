import { useState } from "react";

export default function CheckBox(){
    const [checked, setChecked] = useState(false)


    function handleCheckBox(e){
        setChecked(e.target.checked)
    }


    return(
        <>
        <input type="checkbox" checked={checked} onChange={handleCheckBox} />
        <p>{checked ? 'Checked' : "Unchecked"}</p>
        </>
    )
}