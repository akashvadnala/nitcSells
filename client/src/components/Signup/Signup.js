import React, { useState } from 'react';
import Img1 from '../Login/img1.jpg';
import '../Login/Login.css';
import axios from "axios";
import { SERVER_URL } from '../../EditableStuff/Config';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const navigate = useNavigate();

    const [cred, setCred] = useState({
        name: "",
        email: "",
        username: "",
        password: "",
        cpassword: ""
    })

    const onSignup = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${SERVER_URL}/signup`, cred,
                { withCredentials: true });
            if (res.status === 200) {
                navigate('/');
            }
            else {

            }
        } catch (err) {
            console.log(err);
        }
    }

    const handleInput = (e) => {
        setCred({ ...cred, [e.target.name]: e.target.value })
    }
    
    return (
        <>
            <div className="login-container">
                <div className="login__content">
                    <img src={Img1} alt="login image" className="login__img" />

                    <form className="login__form" method='POST'>
                        <div>
                            <h1 className="login__title">
                                Sign Up
                            </h1>
                            <p className="login__description">
                                {/* Welcome! Please login to continue. */}
                            </p>
                        </div>

                        <div>
                            <div className="login__inputs">

                                <div>
                                    <label for="" className="login__label">Name</label>
                                    <input type="text" name="username" value={cred.name} onChange={handleInput} placeholder="Enter your name" required className="login__input" />
                                </div>

                                <div>
                                    <label for="" className="login__label">EMail</label>
                                    <input type="text" name="username" value={cred.email} onChange={handleInput} placeholder="Enter your email" required className="login__input" />
                                </div>
                                <div>
                                    <label for="" className="login__label">Username</label>
                                    <input type="text" name="username" value={cred.username} onChange={handleInput} placeholder="Enter your username" required className="login__input" />
                                </div>

                                <div>
                                    <label for="" className="login__label">Password</label>

                                    <div className="login__box">
                                        <input type="password" name='password' value={cred.password} onChange={handleInput} placeholder="Enter your password" required className="login__input" id="input-pass" />
                                        <i className="ri-eye-off-line login__eye" id="input-icon"></i>
                                    </div>
                                </div>
                                <div>
                                    <label for="" className="login__label">Confirm Password</label>

                                    <div className="login__box">
                                        <input type="password" name='cpassword' value={cred.cpassword} onChange={handleInput} placeholder="Confirm your password" required className="login__input" id="input-pass" />
                                        <i className="ri-eye-off-line login__eye" id="input-icon"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="login__buttons">
                                <button onClick={onSignup} className="login__button">Sign Up</button>
                                <button type='reset' className="login__button login__button-ghost"><a href="/login" style={{textDecoration:"none",color:"white"}}>Login</a></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Signup