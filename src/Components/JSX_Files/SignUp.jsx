import React from "react";
import "../CSS_Files/SignUp.css";
import { Link } from 'react-router-dom';


let SignUp = () => {
    return (
        <>
            <div className="SignUpPage">

                <div class="form-container">
                    <h1 className="signup_h1">Sign Up</h1>
                    <form>
                        
                        <label for="FirstName">First Name</label>
                        <input type="text" id="FirstName" required />

                        <label for="LasttName">Last Name</label>
                        <input type="text" id="LastName" required />

                        <label for="email">Email Address</label>
                        <input type="email" id="email" required />

                        <label for="password">Password</label>
                        <input type="password" id="password" required />

                        <label for="confirm-password">Confirm Password</label>
                        <input type="password" id="confirm-password" required />

                        <label for="Sign In" className="signin"> Already have an account.<Link to="/SignIn">Sign In</Link></label>

                        <div className="submit"><button>Sign Up</button></div>
                    </form>
                </div>
            </div>


        </>
    )
}
export default SignUp;