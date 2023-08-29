
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    let navigate = useNavigate();

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
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            navigate("/");
        } else {
            props.showAlert("else","danger")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className="outer-box">
            <div className="inner-box">
                <form onSubmit={handleSubmit}>
                    <center>
                        <h1>Welcome to Note-vault</h1>
                        <h5>Chill out and log in with your email</h5>
                    </center>
                    <div className="mb-3 my-4">
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
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
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
                                className="btn btn-outline-secondary"
                                onClick={toggleShowPassword}
                            >
                                {showPassword ? "🙈 Hide" : "👀 Show"}
                            </button>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;


