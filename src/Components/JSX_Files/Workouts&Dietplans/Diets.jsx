import React from "react";
import "../../CSS_Files/Diets.css";

const Diets = ({ diets, setDiets }) => {
  const handleClickDiet = () => {
    
  };
  return (
    <>
      <div className="diets">
        <h1></h1>
        <div className="dietsContainer">
          {diets.map((item) => (
            <div className="dietsplans" key={item.id}>
              <h2>{item.type}</h2>
              <p>{item.breakfast}</p> <hr />
              <p>{item.morningSnack}</p> <hr />
              <p>{item.lunch}</p> <hr />
              <p>{item.afternoonSnack}</p> <hr />
              <p>{item.dinner}</p> <hr />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Diets;
