import { useState } from "react";

export default function TextareaInput(){

    const [text, setText] = useState('')

    function handleTextChange(event) {
        setText(event.target.value)
    }

    return(
        <>
        <textarea value={text} onChange={handleTextChange} />
        <p>{text}</p>
        </>
    )
}