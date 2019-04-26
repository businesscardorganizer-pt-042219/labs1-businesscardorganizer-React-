import React from "react";
import "./user.css";
function User(props) {
  console.log(props);
  return (
    <div className="user-card">
      <div className="user-header">
        <h2>
          {props.user.first_name} {props.user.last_name}
        </h2>
        <p>
          Email:
          {props.user.email}
        </p>
        <p>
          LinkedIn:
          <a href={props.user.LinkedIn} alt="linkedin" />
        </p>
        <p>
          Github:
          <a href={props.user.Github} alt="github" />
        </p>
      </div>
      <div className="user-img">
        <img src={props.user.Avatar} alt="user-avatar" />
      </div>
    </div>
  );
}

export default User;
