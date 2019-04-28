import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCards, deleteCard} from '../actions';


import User from "./User";
import UserProfile from "./UserProfile";
import Navigation from "./Navigation";

import "./user.css";


class UserList extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }
  componentDidMount() {
    this.props.getCards();
  }
  onClick = (id) => {
    this.props.deleteCard(id)
      .then(window.location.reload())
  }

  render() {
    return (
      <Link to={`/UserList/${UserProfile}`} className="user-list">
        <h1>
          {this.state.user.first_name} {this.state.user.last_name}
        </h1>
      <div className="user-list">
        <Navigation />
        <div className="active-user-list">
          {!this.props.fetchingCards && this.props.cards.map(card => <User key={card.id} card={card} onClick={this.onClick} />)}
        </div>
      </Link>
    );
  }
}

const mapStateToProps = state => ({
  cards: state.cards,
  fetchingCards: state.fetchingCards
});

export default connect(mapStateToProps, { getCards, deleteCard })(UserList);