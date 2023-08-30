

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../context_notes/LoginForm.css'; // Import your custom styles

const LoginForm = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        console.log(json);
        if (json.success === true) {
            localStorage.setItem('token', json.authtoken);
            navigate("/");
            props.showAlert("Logged In","success")
        } else {
            props.showAlert("Invalid email-id or password","danger")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <h1 className="login-title">Welcome to Note-vault</h1>
                <h5 className="login-subtitle">Chill out and log in with your email</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            value={credentials.email}
                            onChange={onChange}
                            id="email"
                            name="email"
                            aria-describedby="emailHelp"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Password</label>
                        <div className="input-group">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                                value={credentials.password}
                                onChange={onChange}
                                name="password"
                                id="password"
                            />
                            <button
                                type="button"
                                className="show-password-btn"
                                onClick={toggleShowPassword}
                            >
                                {showPassword ? "🙈 Hide" : "👀 Show"}
                            </button>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary login-btn">Login</button>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;

