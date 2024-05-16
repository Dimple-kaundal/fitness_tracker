import React, { useState } from "react";
import "../CSS_Files/SignUp.css";
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        console.log(JSON.stringify(user));
        try {
            const response = await fetch("http://localhost:8080/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            const data = await response.json();
            console.log(data);
            setUser({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="SignUpPage">
            <div className="form-container">
                <h1 className="signup_h1">Sign Up</h1>
                <form onSubmit={handleFormSubmit}>


                    <label htmlFor="FirstName">First Name</label>
                    <input type="text" id="FirstName" onChange={(e) => setUser({ ...user, firstName: e.target.value })} value={user.firstName} required />

                    <label htmlFor="LastName">Last Name</label>
                    <input type="text" id="LastName" onChange={(e) => setUser({ ...user, lastName: e.target.value })} value={user.lastName} required />

                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" onChange={(e) => setUser({ ...user, email: e.target.value })} value={user.email} required />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={(e) => setUser({ ...user, password: e.target.value })} value={user.password} required />

                    {/* <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" id="confirm-password" required /> */}

                    <label htmlFor="Sign In" className="signin"> Already have an account.
                        <Link to="/SignIn">Sign In</Link></label>

                    <input type="submit" className="submit" value="Sign Up"></input>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
