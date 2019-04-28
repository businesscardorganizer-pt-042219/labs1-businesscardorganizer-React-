import React from "react";
import dummydata from "../dummydata";
// import user from "./User";
import QRcode from "qrcode-react";

import Navigation from "./Navigation";
import AddCardForm from "./AddCardForm";


const Profile = props => {
  console.log(props);
  const id = props.match.params.id;
  const profile = dummydata.find(user => `${user.id}` === id);
  return (
    <div className="user-profile-wrapper">
      <Navigation />
    { profile === underfind ? (
          <AddCardForm /> 
      ) : (
          <div className="user-profile-card">
            <h2>
              {profile.first_name} {profile.last_name}
            </h2>
            <p>
              Email:
              {profile.email}
            </p>
            {/* <p>
              LinkedIn:
              <a href={profile.LinkedIn} alt="linkedin" />
            </p>
            <p>
              Github:
              <a href={profile.Github} alt="github" />
            </p> */}

            <div>
              <QRcode value="" bgColor="#FFFFFF" fgColor="#000000" level="L" />
            </div>
          </div>
      )
    </div>
  );
};

export default Profile;