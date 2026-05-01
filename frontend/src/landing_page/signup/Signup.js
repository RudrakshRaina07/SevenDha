import React, { useState } from 'react';
import {Link, useNavigate} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import axios from "axios";

const Signup = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
        username: "",
    });

    const {email, password, username} = inputValue;
    const handleOnchange = (e) => {
        const {name, value} = e.target;
        setInputValue({
            ...inputValue,
            [name] : value,
        });
    };

    const handleError = (err) => {
        toast.error(err, {
            position : 'bottom-left',
        });
    };

    const handleSuccess = (msg) => {
        toast.success(msg, {
            position : 'bottom-right',
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const { data } = await axios.post(
                `${process.env.REACT_APP_BACKEND_URL}/signup`,
                {
                    ...inputValue,
                },
                {
                    withCredentials : true
                }
            );

            const {success, message} = data;
            if(success){
                handleSuccess(message);
                setTimeout(() => {
                    window.location.href = process.env.REACT_APP_DASHBOARD_URL;
                }, 1000);
            }else {
                handleError(message);
            }
        }catch(err){
            console.error(err);
        }

        setInputValue({
            ...inputValue,
            email: "",
            password: "",
            username: ""
        });
    };

    return (
        <div className='auth_page'>
            <div className='form_container'>
                <h2>Signup Account</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input 
                            type='email'
                            value={email}
                            name='email'
                            placeholder='Enter your email'
                            onChange={handleOnchange}
                        />
                    </div>
                    <div>
                        <label htmlFor='username'>Username</label>
                        <input
                            type='text'
                            name='username'
                            value={username}
                            placeholder='Enter your username'    
                            onChange={handleOnchange}
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input 
                            type='password'
                            name='password'
                            value={password}
                            placeholder='Enter your password'
                            onChange={handleOnchange}
                        />
                    </div>
                    <button type='submit'>Submit</button>
                    <span>
                        Already have an account? <Link to={"/login"}>Login</Link> 
                    </span>
                </form>
                <ToastContainer />
            </div>
        </div>
    )
}

export default Signup;