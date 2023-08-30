import React, { useEffect } from 'react'
import { Link, useLocation,useNavigate } from "react-router-dom";

function Navbar() {
    let navigate = useNavigate()
    let location = useLocation();
    useEffect(() => {
    }, [location]);

    const handlelogout = ()=>{
        localStorage.removeItem('token')
        navigate('/login')
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: " #ccc7fa" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        Note-Vault
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location === '/about' ? "active" : ""} `} aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location === '/about' ? "active" : ""} `} aria-current="page" to="/aboutus">
                                    About Us
                                </Link>
                            </li>

                        </ul>
                        {!localStorage.getItem('token') ? (
                            <>
                                <Link className="btn btn-primary mx-2" to="/login" role="button">Login</Link>
                                <Link className="btn btn-primary" to="/signup" role="button">SignUp</Link>
                            </>
                        ) : (
                            <button onClick={handlelogout} className="btn btn-primary">Logout</button>
                        )}

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar