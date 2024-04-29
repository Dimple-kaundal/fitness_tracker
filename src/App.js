import React from "react";

import NavBar from "./Components/JSX_Files/NavBar.jsx";
import LandingPage from "./Components/JSX_Files/LandingPage.jsx";
import Workout from "./Components/JSX_Files/Workout.jsx";
import DietPlan from "./Components/JSX_Files/DietPlan.jsx";
import Shop from "./Components/JSX_Files/Shop.jsx";
import AboutUs from "./Components/JSX_Files/AboutUs.jsx";
import Cart from "./Components/JSX_Files/Cart.jsx";
import SignUp from "./Components/JSX_Files/SignUp.jsx";
import Footer from "./Components/JSX_Files/Footer.jsx";

import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="Workout" element={<Workout />} />
          <Route path="DietPlan" element={<DietPlan />} />
          <Route path="Shop" element={<Shop />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="SignUp" element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
