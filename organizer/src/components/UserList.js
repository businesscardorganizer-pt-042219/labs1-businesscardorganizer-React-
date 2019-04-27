import React from "react";
import { connect } from "react-redux";
import { getCards } from '../actions';

import User from "./User";
import data from "../dummydata";
import PropTypes from "prop-types";
import "./user.css";
import Navigation from "./Navigation";


class UserList extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [], /* we should delete this line in the future, it's for dummydata */
      cards: []
    };
  }
  componentDidMount() {
    this.props.getCards();
    this.setState({ user: data }); /* we should delete this line in the future, it's for dummydata */
  }
  
  render() {
    return (
      <div className="user-list">
        <Navigation />
        <h1>{this.state.user.name}</h1>

        <div className="active-user-list">
          {this.state.user.map(user => (
            <User user={user} key={user.id} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cards: state.cards,
  fetchingCards: state.fetchingCards
});

export default connect(mapStateToProps, { getCards })(UserList);