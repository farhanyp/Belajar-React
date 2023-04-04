// Mencoba React Hooks
import React, {useEffect,useState} from "react";

const Hooks = () => {
    const [counter, setCounter] = useState(0)

    // Seperti fungsi di class componen did mount, did update dan unmount
    useEffect(()=>{
        document.title = `Counter sekarang: ${counter}`
        // Harus mereturn sesuatu jika ingin seperti component unmount
        return () =>{
            document.title = "React App"
            console.log(counter)
        }
    })
    return(
        <>
        <p>Counter sekarang: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Tambah Counter</button>
        </>
    )
}

export default Hooks
