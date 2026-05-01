import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
    });

    const {email, password} = inputValue;
    const handleOnchange = (e) => {
        const {name, value} = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };

    const handleError = (err) => {
        toast.error(err, {
            position: "bottom-left",
        });
    }

    const handleSuccess = (msg) => {
        toast.success(msg, {
            position: "bottom-right",
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const {data} = await axios.post(
                `${process.env.REACT_APP_BACKEND_URL}/login`,
                {
                    ...inputValue,
                },
                {
                    withCredentials: true,
                }
            );

            console.log(data);
            const  {success, message} = data;
            if(success){
                handleSuccess(message);
                setTimeout(() => {
                    window.location.href = process.env.REACT_APP_DASHBOARD_URL;
                }, 1000);
            }else{
                handleError(message);
            }
        } catch(error){
            console.error(error);
        }

        setInputValue({
            ...inputValue,
            email: "",
            password: ""
        });
    };

    return (
    <div className="auth_page">
        <div className="form_container">
            <h2>Login Account</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Enter your email"
                        onChange={handleOnchange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Enter your password"
                        onChange={handleOnchange}
                    />
                </div>
                <button type="submit">Submit</button>
                <span>
                    Don't have an account? <Link to={"/signup"}>Signup</Link>
                </span>
            </form>
            <ToastContainer />
        </div>
    </div>
)
};

export default Login;