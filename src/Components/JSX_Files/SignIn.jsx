import React from 'react'
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <>
            <div className="SignUpPage">

                <div class="form-container">
                    <h1 className="signup_h1">Sign In</h1>
                    <form>

                        <label for="email">Email Address</label>
                        <input type="email" id="email" required />

                        <label for="password">Password</label>
                        <input type="password" id="password" required />

                        <label for="Sign In" className="signin">Not have an account. <Link to="/SignUp">Sign Up</Link></label>

                        <div className="submit"><button>Sign In</button></div>
                    </form>
                </div>
            </div>


        </>
    )
}

export default SignIn