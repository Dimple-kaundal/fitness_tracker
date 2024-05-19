import React from 'react'
import '../CSS_Files/Workout.css'

import Banner2_img from "../_Imgs/Gym.jpg";

export const Workout = () => {
  return (
    <>
      <div className="workoutgrid">

        <div className="workoutgrid-item shoulder">
          <div className="workoutcontainer">
            <h2>Shoulder</h2>
            <p>The shoulder muscles include the deltoids, which consist of anterior, medial, and posterior heads, responsible for various movements such as abduction, flexion, extension, and rotation of the arm.</p>
          </div>
        </div>

        <div className="workoutgrid-item chest">
          <div className="workoutcontainer">
            <h2>Chest</h2>
            <p>The chest muscles, primarily the pectoralis major and minor, are responsible for movements such as pushing, pressing, and adduction of the arms.</p>
          </div>
        </div >

        <div className="workoutgrid-item back">
          <div className="workoutcontainer">
            <h2>Back</h2>
            <p>The back muscles, including the latissimus dorsi, rhomboids, and erector spinae, support posture, spinal stability, and facilitate various upper body movements.</p>
          </div>
        </div>

        <div className="workoutgrid-item biceps">
          <div className="workoutcontainer">
            <h2>Biceps</h2>
            <p>The biceps brachii, consisting of a short and long head, flexes the elbow and supinates the forearm.</p>
          </div>
        </div>

        <div className="workoutgrid-item triceps">
          <div className="workoutcontainer">
            <h2>Triceps</h2>
            <p>The triceps brachii is a three-headed muscle located on the back of the upper arm, responsible for extending the elbow joint.</p>
          </div>
        </div>

        <div className="workoutgrid-item forearms">
          <div className="workoutcontainer">
            <h2>Forearm</h2>
            <p>The forearm muscles, including the flexors and extensors, control wrist and finger movements and support grip strength.</p>
          </div>
        </div>

        <div className="workoutgrid-item abs">
          <div className="workoutcontainer">
            <h2>Abs</h2>
            <p>The abdominal muscles, including the rectus abdominis, obliques, and transverse abdominis, provide core stability and support while facilitating trunk flexion, rotation, and lateral bending.</p>
          </div>
        </div>

        <div className="workoutgrid-item buttocks">
          <div className="workoutcontainer">
            <h2>Buttocks</h2>
            <p>The buttocks muscles, including the gluteus maximus, medius, and minimus, are responsible for hip extension, abduction, and rotation, providing stability and power for lower body movements.</p>
          </div>
        </div>

        <div className="workoutgrid-item legs">
          <div className="workoutcontainer">
            <h2>Legs</h2>
            <p>The leg muscles consist of the quadriceps, hamstrings, glutes, calves, and adductors, responsible for various movements such as walking, running, jumping, and squatting</p>
          </div>
        </div>
      </div >
    </>
  )
}
export default Workout;
