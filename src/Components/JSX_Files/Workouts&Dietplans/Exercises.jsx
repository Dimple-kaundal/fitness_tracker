import React from "react";
import "../../CSS_Files/Exercises.css";

const Exercises = ({ exercise }) => {
  return (
    <>
      <div className="exercises">
        <div className="exerciseContainer">
          {exercise.map((item) => (
            <div className="muscleexercise" key={item.id}>
              <h2>{item.text}</h2>
              <video src={item.imageUrl} autoPlay loop muted></video>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Exercises;
