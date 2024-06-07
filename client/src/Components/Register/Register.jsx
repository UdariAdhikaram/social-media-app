import React, {useState} from 'react';

import "./register.css"

export default function Register() {

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
                    <form className="registerBox">
                        <input
                            type="text"
                            placeholder="Username"
                            className="registerInput"
                            
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="registerInput"
                            
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="registerInput"
                            
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="registerInput"
                        />
                        <button className="registerButton">Sign Up</button>
                        <br/>
                        <span className='logRegister'>Already have an account ?</span>
                        <button className="logRegisterButton">Log in</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
