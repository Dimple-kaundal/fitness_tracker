import React from 'react'
import '../CSS_Files/UserProfile.css'

import userDp from "../_Imgs/Gym2.jpg"

const UserProfile = ({ globalUser }) => {
  const name = globalUser.firstName;
  console.log(globalUser);

  return (
    <>
     
      <div className="userProfile">
        <div className="userDp">
          <img src={userDp} alt="" />
        </div>
        <div className="userDetails">
          <h2>Fname Lname</h2>
          <p>email.com</p>
        </div>
      </div>
    </>
  )
}

export default UserProfile;