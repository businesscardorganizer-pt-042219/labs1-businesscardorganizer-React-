import React from "react";
import { Link } from "react-router-dom";

import GithubIcon from "../img/github-icon.png";
import LinkedinIcon from "../img/linkedin-icon.png";
import PhoneIcon from "../img/phone-icon.png";
import EmailIcon from "../img/email-icon.png";

import "./user.css";


function User(props) {
  return (
    <div className="user-card">
      <div className="user-controls">
        <Link to={`/user-list/${props.card.id}`}><button className={`btn${props.hideControls}`}>Open</button></Link>
        <p className="user-edit" /* Add link to the edit form page here */>✎</p>
        <p className="user-delete" onClick={() => props.onClick(props.card.id)}>✘</p>
      </div>
      <div className="user-header">
        <header>
          <h2>
            {props.card.first_name} {props.card.last_name}
          </h2>
          {/* There're both title and company name in profile*/}
          {(props.card.work_title && props.card.company_name) && (<p className="who-is">
            {props.card.work_title} at {props.card.company_name}
          </p>)}
          {/* There's only title in profile*/}
          {(props.card.work_title && !props.card.company_name) && (<p className="who-is">{props.card.work_title}</p>)}
          {/* There's only company name in profile*/}
          {(!props.card.work_title && props.card.company_name) && (<p className="who-is">{props.card.company_name}</p>)}
        </header>
        
        <div className="card-body">
          {(props.card.cell_phone || props.card.email || props.card.linkedIn || props.card.github) && (<h4>Contact information</h4>)}
          
          {/* Making checks for every item if we have info in DB, if not, we're just not showing this line */}
          {
            props.card.cell_phone && (
              <div className="card-body-item">
                <img className="phone-icon" src={PhoneIcon} alt="" />
                <div>{props.card.cell_phone}</div>
              </div>
            )
          }
          {
            props.card.email && (
              <div className="card-body-item">
                <img className="email-icon" src={EmailIcon} alt="" />
                <div>{props.card.email}</div>
              </div>
            )
          }
          {
            props.card.linkedIn && (
              <div className="card-body-item">
                <img className="linkedin-icon" src={LinkedinIcon} alt="" />
                <a href={props.card.linkedIn} alt="linkedin">LinkedIn</a>
              </div>
            )
          }
          {
            props.card.github && (
              <div className="card-body-item">
                <img className="github-icon" src={GithubIcon} alt="" />
                <a href={props.card.github} alt="github">GitHub</a>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default User;