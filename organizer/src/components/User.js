import React from "react";

import GithubIcon from "../img/github-icon.png";
import LinkedinIcon from "../img/linkedin-icon.png";
import PhoneIcon from "../img/phone-icon.png";
import EmailIcon from "../img/email-icon.png";

import "./user.css";

function User(props) {
  return (
    <div className="user-card">
      <div className="user-header">
        <header>
          <h2>
            {props.card.first_name} {props.card.last_name}
          </h2>
          {/* There're both title and company name in profile*/}
          {props.card.work_title && props.card.company_name && (
            <p className="who-is">
              {props.card.work_title} at {props.card.company_name}
            </p>
          )}
          {/* There's only title in profile*/}
          {props.card.work_title && !props.card.company_name && (
            <p className="who-is">{props.card.work_title}</p>
          )}
          {/* There's only company name in profile*/}
          {!props.card.work_title && props.card.company_name && (
            <p className="who-is">{props.card.company_name}</p>
          )}
        </header>

        <div className="card-body">
          <h4>Contact information</h4>
          <div className="card-body-item">
            <img className="phone-icon" src="" alt="" />
            <div>{props.card.work_phone}</div>
          </div>
          <div className="card-body-item">
            <img className="email-icon" src="" alt="" />
            <div>{props.card.email}</div>
          </div>
          <div className="card-body-item">
            <img className="linkedin-icon" src="" alt="" />
            <a href={props.card.linkedIn} alt="linkedin">
              LinkedIn
            </a>
          </div>
          <div className="card-body-item">
            <img className="github-icon" src="" alt="" />
            <a href={props.card.github} alt="github">
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* <div className="user-img">
        <img src={props.card.avatar} alt="user-avatar" />
      </div> */}

      <div className="user-controls">
        <p
          className="user-edit"
          onClick={() => props.handleUpdate(props.card.id)}
        >
          ✎
        </p>
        <p className="user-delete" onClick={() => props.onClick(props.card.id)}>
          ✘
        </p>
      </div>
    </div>
  );
}

export default User;
