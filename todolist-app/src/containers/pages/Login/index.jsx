import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { changeLoading, changeDataUsers } from '../../../config/redux/reducer'
import { auth } from '../../../config/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import'./Login.scss'

const Login = () => {
    const isLoading = useSelector((state) => state.reducer.isLoading)
    
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const loginFirebase = () => {
        return new Promise((resolve, reject) => {
            dispatch(changeLoading(true))
            signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                localStorage.setItem('userId', result.user.uid)
            // Signed in
            const dataUsers = {
                userId : result.user.uid
            }
            // ...
            dispatch(changeLoading(false))
            dispatch(changeDataUsers(dataUsers))
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
        const res = await loginFirebase().catch(err => err)
        setEmail("")
        setPassword("")
        if(res){
            navigate('/')   
        }else{
            alert("Kesalahan dalam email/password")
        }
        
    }


    return(
        <>
        <div className="auth-container">
                <div className="auth-card">
                    <p className="auth-title">Login Page</p>
                    <input className="input" id="email" placeholder="Email" type="text" onChange={(event) => setEmail(event.target.value)} value={email}/>
                    <input className="input" id="password" placeholder="Password" type="password" onChange={(event) => setPassword(event.target.value)}  value={password}/>
                    {
                        (isLoading) ? <button className="btn disabled" onClick={()=>handleSubmit()}> Loading </button> : <button className="btn" onClick={()=>handleSubmit()}> Login </button>
                    }
                     
                </div>
            </div>
        </>
    )
}

export default Login