import React from "react";
import User from "./User";
// import data from "../dummydata";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
//import AddCardForm from "./AddCardForm";
import { getData } from "../actions";
import { connect } from "react-redux";
import "./user.css";

class UserList extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     user: []
  //   };
  // }
  // componentDidMount() {
  //   this.setState({ user: data });
  // }

  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <div className="user-list">
        <h1>
          {this.props.user.first_name} {this.props.user.last_name}
        </h1>

        {this.props.user.map(user => (
          <div key={this.props.user.id} className="active-user-list">
            <User user={user} />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    fetchingUser: state.fetchingUser
  };
};
export default connect(
  mapStateToProps,
  { getData }
)(UserList);
