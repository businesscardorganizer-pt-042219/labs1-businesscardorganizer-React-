import React from "react";
import "./user.css";
function User(props) {
  return (
    <div className="user-card">
      <div className="user-header">
        <h2>
          {props.card.first_name} {props.card.last_name}
        </h2>
        <p>
          Company: {props.card.company_name}
        </p>
        <p>
          Title: {props.card.work_title}
        </p>
        <p>Phone: {props.card.work_phone}</p>
        {/* <p>
          Email:
          {props.card.email}
        </p> */}
        <p>
          LinkedIn:
          <a href={props.card.linkedIn} alt="linkedin" />
        </p>
        <p>
          Github:
          <a href={props.card.github} alt="github" />
        </p>
      </div>
      {/* <div className="user-img">
        <img src={props.card.avatar} alt="user-avatar" />
      </div> */}
      <div className="user-controls">
        <p className="user-delete" onClick={() => props.onClick(props.card.id)}>✘</p>
        <p className="user-edit" /* Add onClick event here */>✎</p>
      </div>
    </div>
  );
}

export default User;
