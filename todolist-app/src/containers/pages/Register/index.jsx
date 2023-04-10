import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeLoading } from '../../../config/redux/reducer'
import { useState } from 'react'
import { auth } from '../../../config/firebase/index'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import './Register.scss'



const Register = () => {
    const isLoading = useSelector((state) => state.reducer.isLoading)
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const registerFirebase = () => {
        return new Promise((resolve, reject) => {
            dispatch(changeLoading(true))
            createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
            // Signed in
            console.log(result)
            // ...
            dispatch(changeLoading(false))
            resolve(true)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorCode,errorMessage)
            dispatch(changeLoading(false))
            reject(false)
        });
            
        })
    }

    const handleSubmit = async () => {
        const res = await registerFirebase().catch(err => err)
        console.log("berhasil")
        setEmail("")
        setPassword("")
        if(res){
            alert("Berhasil mendaftar")
        }
    }




    return(
        <>
        <div className="auth-container">
                <div className="auth-card">
                    <p className="auth-title">Register Page</p>
                    <input className="input" id="email" placeholder="Email" type="text" onChange={(event) => setEmail(event.target.value)} value={email}/>
                    <input className="input" id="password" placeholder="Password" type="password" onChange={(event) => setPassword(event.target.value)}  value={password}/>
                    {
                        (isLoading) ? <button className="btn disabled" onClick={()=>handleSubmit()}> Loading </button> : <button className="btn" onClick={()=>handleSubmit()}> Register </button>
                    }
                     
                </div>
            </div>
        </>
    )
}

export default Register