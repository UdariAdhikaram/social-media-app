import React, {useRef} from 'react';
import "./login.css"

export default function Login() {
const email = useRef();
const password = useRef();
const handleClick = (e) =>{
    e.preventDefault();
    console.log(email);
}
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
                            //ref={emailRef}
                            placeholder="Username" required className="loginInput" ref={email}
                        />
                        <input
                            type="password"
                            //ref={passwordRef}
                            placeholder="Password" required minLength="6" className="loginInput" ref={password}/>
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <span className="LoginRegister">Don't have an account, Click here to</span>
                        <button className="loginRegisterButton">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
