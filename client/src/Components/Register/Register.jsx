import React, {useRef, useState} from 'react';
import "./register.css"
import { Password } from '@mui/icons-material';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useHistory();

    const handleClick = async (e) =>{
        e.preventDefault();
        if(passwordAgain.current.value !== password.current.value){
            password.current.setCustomValidity("Password don't match!")
        }else{
            const user = {
                username : username.current.value,
                email : email.current.value,
                password : password.current.value,
       };
        try {
            await axios.post("/auth/register", user);
            history.push("/login")
       } catch (error) {
            console.log(error);
       }
    }};
    return (
        <div className="register">
            <div className="registerWrapper">
                <div className="registerLeft">
                    <h3 className="registerLogo">StoryBook</h3>
                    <span className="registerDesc">
                    Connect with friends and 
                    the world around you on StoryBook.
                </span>
                </div>
                <div className="registerRight">
                    <form className="registerBox" onSubmit={handleClick}>
                        <input
                            type="text"
                            placeholder="Username"
                            required
                            className="registerInput"
                            ref= {username}
                            
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            required
                            className="registerInput"
                            ref= {email}
                            
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            required
                            className="registerInput"
                            ref= {password}
                            minLength="6"
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            required
                            className="registerInput"
                            ref= {passwordAgain}
                        />
                        <button className="registerButton" type='submit'>Sign Up</button>
                        <br/>
                        <span className='logRegister'>Already have an account ?</span>
                        <button className="logRegisterButton">Log in</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
