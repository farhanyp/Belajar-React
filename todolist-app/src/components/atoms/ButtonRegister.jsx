import React from "react"
import "../../containers/pages/Register/Register.scss"
import { useSelector } from "react-redux"

const ButtonRegister = (action,value,styles) => {
    const isLoading = useSelector((state) => state.reducer.isLoading)
    console.log(action)
    return(
        <>
        </>
    )
    // if(isLoading){
    //     return (<button className="btn disabled" onClick={() => action()}> Loading </button>)
    // }else{
    //     return (<button className="btn" onClick={() => action()}> Register </button>)
    // }
}

export default ButtonRegister