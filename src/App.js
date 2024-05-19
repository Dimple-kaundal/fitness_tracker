import React, { useState } from "react";
import NavBar from "./Components/JSX_Files/NavBar.jsx";
import LandingPage from "./Components/JSX_Files/LandingPage.jsx";
import Workout from "./Components/JSX_Files/Workout.jsx";
import Exercises from "./Components/JSX_Files/Workouts&Dietplans/Exercises.jsx";
import DietPlan from "./Components/JSX_Files/DietPlan.jsx";
import Shop from "./Components/JSX_Files/Shop.jsx";
import AboutUs from "./Components/JSX_Files/AboutUs.jsx";
import Cart from "./Components/JSX_Files/Cart.jsx";
import SignUp from "./Components/JSX_Files/SignUp.jsx";
import Footer from "./Components/JSX_Files/Footer.jsx";
import SignIn from "./Components/JSX_Files/SignIn.jsx";
import PlaceOrder from "./Components/JSX_Files/PlaceOrder.jsx";
import UserProfile from "./Components/JSX_Files/UserProfile.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Shoulder1 from "./Components/_Imgs/Abs.jpeg";
import Shoulder3 from "./Components/_Imgs/Abs.jpeg";
import Shoulder2 from "./Components/_Imgs/Abs.jpeg";
import Shoulder5 from "./Components/_Imgs/Abs.jpeg";
import Shoulder4 from "./Components/_Imgs/Abs.jpeg";
import Shoulder6 from "./Components/_Imgs/Abs.jpeg";
import Shoulder7 from "./Components/_Imgs/Abs.jpeg";

const shoulder = [
  { id: 1, text: "Dumbbell Front Raises", imageUrl: Shoulder1 },
  { id: 2, text: "Overhead Presses", imageUrl: Shoulder2 },
  { id: 3, text: "Lateral Raises", imageUrl: Shoulder3 },
  { id: 4, text: "Upright Rows", imageUrl: Shoulder4 },
  { id: 5, text: "Bent Over Rows", imageUrl: Shoulder5 },
  { id: 6, text: "Reverse Flyes", imageUrl: Shoulder6 },
  { id: 7, text: "Face Pulls", imageUrl: Shoulder7 },
];
function App() {
  const [value, setValue] = useState([]);
  const [globalUser, setGlobalUser] = useState(null);
  const [exercise, setExercise] = useState(shoulder || []);
  console.log("user set to", globalUser);
  return (
    <>
      <BrowserRouter>
        <NavBar value={value} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="Workout"
            element={<Workout setExercise={setExercise} />}
          />
          <Route path="DietPlan" element={<DietPlan />} />
          <Route
            path="Shop"
            element={<Shop value={value} setValue={setValue} />}
          />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route
            path="Cart"
            element={<Cart value={value} setValue={setValue} />}
          />
          <Route path="PlaceOrder" element={<PlaceOrder />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route
            path="SignIn"
            element={
              <SignIn globalUser={globalUser} setGlobalUser={setGlobalUser} />
            }
          />
          <Route
            path="UserProfile"
            element={<UserProfile globalUser={globalUser} />}
          />
          <Route
            path="Workout/Exercises"
            element={
              <Exercises exercise={exercise} setExercise={setExercise} />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
