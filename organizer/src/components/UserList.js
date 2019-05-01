import React from "react";
<<<<<<< HEAD
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCards, deleteCard } from "../actions";
=======
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCards, deleteCard} from '../actions';

>>>>>>> 434eb6df8f9f93f1b8e444a7d566da2f190b2e7e

import User from "./User";
import Navigation from "./Navigation";

<<<<<<< HEAD
=======
import SpinnerDataLoad from "./SpinnerDataLoad";

>>>>>>> 434eb6df8f9f93f1b8e444a7d566da2f190b2e7e
import "./user.css";


class UserList extends React.Component {
  constructor() {
    super();
<<<<<<< HEAD
    this.state = {};
  }
  componentDidMount() {
    this.props.getCards();
=======
    this.state = {
      card: []
    };
  }
  componentDidMount() {
    this.props.getCards();
  }
  onClick = (id) => {
    this.props.deleteCard(id);
>>>>>>> 434eb6df8f9f93f1b8e444a7d566da2f190b2e7e
  }
  onClick = id => {
    this.props.deleteCard(id);
  };
  render() {
    return (
      <div className="user-list">
        <Navigation />
        <div className="active-user-list">
<<<<<<< HEAD
          {this.props.cards.map(card => (
            <User key={card.id} card={card} onClick={this.onClick} />
          ))}
=======
          { this.props.fetchingCards ? <SpinnerDataLoad /> :
          (this.props.cards.map(card => <User key={card.id} card={card} onClick={this.onClick} />))}
>>>>>>> 434eb6df8f9f93f1b8e444a7d566da2f190b2e7e
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cards: state.cards,
  fetchingCards: state.fetchingCards,
  deletingCard: state.deletingCard
});

<<<<<<< HEAD
export default connect(
  mapStateToProps,
  { getCards, deleteCard }
)(UserList);
=======
export default connect(mapStateToProps, { getCards, deleteCard })(UserList);
>>>>>>> 434eb6df8f9f93f1b8e444a7d566da2f190b2e7e
