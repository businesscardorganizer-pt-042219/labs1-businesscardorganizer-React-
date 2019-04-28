import React from "react";
// import { Route } from "react-router-dom";
import dummydata from "../dummydata";
import { Link } from "react-router-dom";
// import PrivateRoute from "./components/PrivateRoute";
import "./user.css";

function User(props) {
  const handleProfile = event => {
    event.preventDefault();
    props.history.push("/UserProfile"); /*the link to the profile will be "/" as we discussed on the last meeting (profile === homepage) */
  };

  console.log(props);
  // const id = props.match.params.id;
  // const profile = dummydata.find(user => `${user.id}` === id);
  return (
    <Link to={`/UserList/${props.user.id}`} className="user-card">
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
      </div> */} /* we have no storage for avatar in databse as I can see */
      <div className="user-controls">
        <p className="user-delete" onClick={() => props.onClick(props.card.id)}>✘</p>
        <p className="user-edit" /* Add onClick event here */>✎</p>
      </div>
    </Link>
  );
}

export default User;