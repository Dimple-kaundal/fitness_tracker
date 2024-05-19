import React from "react";
import "../../CSS_Files/Exercises.css";

const Exercises = ({ exercise }) => {
  return (
    <>
      <div className="exercises">
        <h1>Shoulder Workout</h1>
        <div className="exerciseContainer">
          {exercise.map((item) => (
            <div className="exerciseCard" key={item.id}>
              <img src={item.imageUrl} alt="exercise" />
              <h3>{item.text}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Exercises;
