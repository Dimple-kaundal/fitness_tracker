import React from "react";
import "../CSS_Files/UserProfile.css";

import userDp from "../_Imgs/Gym2.jpg";
import { useUser } from "../../userContext";
const UserProfile = ({ globalUser }) => {
  const { userData } = useUser();
  console.log("user set to ", userData);
  return (
    <>
      <div className="userProfile">
        {/* <div className="userDp">
          <img src={userDp} alt="" />
        </div> */}
        <div className="userDetails">
          <h2>
            {userData.firstName} {userData.lastName}
          </h2>
          <p>{userData.email}</p>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
