import React, {useContext, useRef} from 'react';
import "./login.css"
import {loginCall} from "../../apiCalls";
import {AuthContext} from "../../context/AuthContext";
import {CricularProgress} from "@mui/icons-material"
import CircularProgress from '@mui/material/CircularProgress';

export default function Login() {
const emailRef = useRef();
const passwordRef = useRef();
const {user, isFetching, error, dispatch} = useContext(AuthContext);

const handleClick = (e) =>{
    e.preventDefault();
    loginCall({ email: emailRef.current.value, 
        password: passwordRef.current.value }, 
        dispatch);
};
console.log(user)
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">StoryBook</h3>
                    <span className="loginDesc">
                    Connect with friends and the world around you on StoryBook.
                </span>
                </div>

                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input
                            type="email"
                            ref= {emailRef}
                            placeholder="Username" 
                            required 
                            className="loginInput"
                        />
                        <input
                            type="password"
                            ref= {passwordRef}
                            placeholder="Password" 
                            required 
                            minLength="6" 
                            className="loginInput"/>

                        <button className="loginButton" type="submit" disabled={isFetching}>
                            {isFetching ? <CircularProgress style={{ 
                                color: 'white', 
                                width: 20, 
                                height: 20 }}/> : "Log In"}
                        </button>
                        <span className="loginForgot">Forgot Password?</span>
                        <span className="LoginRegister">Don't have an account, Click here to</span>
                        <button className="loginRegisterButton">
                            {isFetching ? <CircularProgress style={{ 
                                color: 'white', 
                                width: 20, 
                                height: 20 }}/> : "Sign Up"} 
                           </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
