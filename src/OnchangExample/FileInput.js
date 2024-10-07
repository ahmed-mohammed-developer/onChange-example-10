import { useState } from "react";

export default function FileInput(){
    const [file, setFile] = useState(null)

    function handleFileChange(event){
        setFile(event.target.files[0])
    }


    return(
        <>
        <input type="file"  onChange={handleFileChange} />
        <p>{file ? file.name : "No file selected"}</p> 
        </>
    )
}