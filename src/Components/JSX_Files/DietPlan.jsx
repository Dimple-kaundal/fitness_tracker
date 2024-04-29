import React from 'react'
import '../CSS_Files/DietPlan.css'

export const DietPlan = () => {
  return (
    <>

      <div className="dietplangrid">

        <div className="dietplangrid-item vegan">
          <div className="dietplancontainer">
            <h2>Vegan</h2>
            <p>A vegan diet is a plant-based diet that excludes all animal products, including meat, fish, dairy, eggs, and even honey.</p>
          </div>

        </div>

        <div className="dietplangrid-item vegetarian">
          <div className="dietplancontainer">
            <h2>Vegetarian</h2>
            <p>A vegetarian diet is a diet that excludes eggs, meat, including poultry and fish, but may include dairy products.</p>
          </div>
        </div >

        <div className="dietplangrid-item eggetarian">
          <div className="dietplancontainer">
            <h2>Eggetarian</h2>
            <p>An eggetarian diet is a vegetarian diet that includes eggs, but excludes meat, fish, and poultry.</p>
          </div>
        </div>

        <div className="dietplangrid-item nonvegetarian">
          <div className="dietplancontainer">
            <h2>Non-Vegetarian</h2>
            <p>A non-vegetarian diet, or omnivorous diet, includes both plant-based and animal-based foods.</p>
          </div>
        </div>

      </div>

    </>

  )
}

export default DietPlan;
