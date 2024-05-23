import React from "react";
import "../../CSS_Files/Exercises.css";

const Exercises = ({ exercise }) => {
  return (
    <>
      <div className="exercises">
        <h1></h1>
        <div className="exerciseContainer">
          {exercise.map((item) => (
            <div className="muscleexercise" key={item.id}>
               <h3>{item.text}</h3>
              <img src={item.imageUrl} alt="exercise" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Exercises;
