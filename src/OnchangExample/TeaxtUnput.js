import { useState } from "react";

export default function TeaxtUnput(){
    const [text, setText] = useState('')

    const handleInputChange = (setText) => (event) => {
        setText(event.target.value)
    }

    return(
        <>
        <input type="text" value={text} onChange={handleInputChange(setText)} />
        <p>{text}</p>
        </>
    )
}