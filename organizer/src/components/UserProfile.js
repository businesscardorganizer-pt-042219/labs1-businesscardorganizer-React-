import React from "react";
import dummydata from "../dummydata";
// import user from "./User";
import { Link } from "react-router-dom";
import QRcode from "qrcode-react";

const Profile = props => {
  console.log(props);

  const id = props.match.params.id;
  const profile = dummydata.find(user => `${user.id}` === id);
  return (
    <div>
      <h2>
        {profile.first_name} {profile.last_name}
      </h2>
      <p>
        Email:
        {profile.email}
      </p>
      {/* <p>Work Title: {profile.work_title}</p>
      <address />

      <p>City: {profile.country}</p>
      <p>Company: {profile.company_name}</p>
      <p>Cell Phone: {profile.cell_phone}</p>
      <p>Work Phone: {profile.work_phone}</p>
      <p>URL: {profile.URL}</p> */}

      {/* <p>
        LinkedIn:
        <a href={profile.LinkedIn} alt="linkedin" />
      </p>
      <p>
        Github:
        <a href={profile.Github} alt="github" />
      </p> */}

      <div>
        <Link to={props.Github}>
          <QRcode
            value={profile.Github}
            bgColor="#FFFFFF"
            fgColor="#000000"
            level="L"
          />
        </Link>
      </div>
      {/* 
      <p>Github: {profile.gitub}</p>
      <p>LinkedIn: {profile.linkedIn}</p> */}
    </div>
  );
};

export default Profile;
