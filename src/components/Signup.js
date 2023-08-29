// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const SignupForm = () => {
//     const [userData, setUserData] = useState({ name: "", email: "", password: "" });
//     const [showPassword, setShowPassword] = useState(false);
//     let navigate = useNavigate();

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const response = await fetch("http://localhost:5000/api/auth/createuser", {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(userData)
    //     });
    //     const json = await response.json();
    //     console.log(json);
    //     if (json.success === true) {
    //         // Save the auth token and redirect
    //         localStorage.setItem('token', json.authtoken);
    //         navigate("/");
    //     } else {
    //         alert("Signup failed. Please check your details and try again.");
    //     }
    // }

//     const onChange = (e) => {
//         setUserData({ ...userData, [e.target.name]: e.target.value });
//     }

//     const toggleShowPassword = () => {
//         setShowPassword(!showPassword);
//     }

//     return (
//       <div className="outer-box">
//           <div className="inner-box signup-box">
//               <form onSubmit={handleSubmit}>
//                   <div className="signup-header">
//                       <h1 className="signup-title">Join Note-vault</h1>
//                       <p className="signup-subtitle">Create a new account to get started</p>
//                   </div>
//                   <div className="form-group">
//                       <label htmlFor="name" className="form-label">Full Name</label>
//                       <input
//                           type="text"
//                           className="form-control"
//                           value={userData.name}
//                           onChange={onChange}
//                           id="name"
//                           name="name"
//                       />
//                   </div>
//                   <div className="form-group">
//                       <label htmlFor="email" className="form-label">Email address</label>
//                       <input
//                           type="email"
//                           className="form-control"
//                           value={userData.email}
//                           onChange={onChange}
//                           id="email"
//                           name="email"
//                           aria-describedby="emailHelp"
//                       />
//                       <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
//                   </div>
//                   <div className="form-group">
//                       <label htmlFor="password" className="form-label">Password</label>
//                       <div className="input-group">
//                           <input
//                               type={showPassword ? "text" : "password"}
//                               className="form-control"
//                               value={userData.password}
//                               onChange={onChange}
//                               name="password"
//                               id="password"
//                           />
//                           <button
//                               type="button"
//                               className="btn btn-outline-secondary show-password-btn"
//                               onClick={toggleShowPassword}
//                           >
//                               {showPassword ? "🙈 Hide" : "👀 Show"}
//                           </button>
//                       </div>
//                   </div>
//                   <button type="submit" className="btn btn-primary signup-btn">Sign Up</button>
//               </form>
//           </div>
//       </div>
//   );
// }

// export default SignupForm;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../context_n"; // Import your custom styles

const SignupForm = () => {
    const [userData, setUserData] = useState({ name: "", email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch("http://localhost:5000/api/auth/createuser", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
      });
      const json = await response.json();
      console.log(json);
      if (json.success === true) {
          // Save the auth token and redirect
          localStorage.setItem('token', json.authtoken);
          navigate("/");
      } else {
          alert("Signup failed. Please check your details and try again.");
      }
  }

    const onChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className="signup-container">
            <div className="signup-box">
                <h1 className="signup-title">Join Note-vault</h1>
                <h5 className="signup-subtitle">Create a new account to get started</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={userData.name}
                            onChange={onChange}
                            id="name"
                            name="name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            value={userData.email}
                            onChange={onChange}
                            id="email"
                            name="email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Password</label>
                        <div className="input-group">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                                value={userData.password}
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
                    <button type="submit" className="btn btn-primary signup-btn">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default SignupForm;
