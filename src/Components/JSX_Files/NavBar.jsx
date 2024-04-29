import React from 'react';
import "../CSS_Files/NavBar.css";
import { Link } from 'react-router-dom';

import Logo from "../_Imgs/Logo2.png"

const NavBar = () => {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <>
            <nav className="navbar">
                <div className="navlogo"><img src={Logo} />Fit N Shop</div>
                <ul className="nav-links">
                    <li onClick={handleScrollToTop}><Link to="/">Home</Link></li>
                    <li onClick={handleScrollToTop}><Link to="/Workout">Workout</Link></li>
                    <li onClick={handleScrollToTop}><Link to="/DietPlan">Diet Plan</Link></li>
                    <li onClick={handleScrollToTop}><Link to="/Shop">Shop</Link></li>
                    <li onClick={handleScrollToTop}><Link to="/AboutUs">About Us</Link></li>
                </ul>
                <div className="navlogo1">

                    <Link to="/Cart">
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="black" classname="bi bi-cart2" viewBox="0 0 18 16">
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                        </svg>
                    </Link>

                    <Link to="/SignUp">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="black" classname="bi bi-person-circle" viewBox="0 0 18 15">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" /></svg>
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
