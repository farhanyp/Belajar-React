import React from "react";
import './Register.scss'
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../../config/firebase/index'

class Register extends React.Component{
    state = {
        email:"",
        password:""
    }

    handleEvent = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = () => {
        const {email, password} = this.state
        createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
            // Signed in
            console.log("result:", res)
            // ...
            this.setState({
                email:"",
                password:""
            })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });


    }

    render(){
        return(
            <>
            <div className="auth-container">
                <div className="auth-card">
                    <p className="auth-title">Register Page</p>
                    <input className="input" id="email" placeholder="Email" type="text" value={this.state.email} onChange={this.handleEvent}/>
                    <input className="input" id="password" placeholder="Password" type="password" value={this.state.password} onChange={this.handleEvent}/>
                    <button className="btn" onClick={this.handleSubmit}>Register</button>
                </div>
            </div>
            </>
        )
    }
}

export default Register