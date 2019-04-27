import React from "react";
import { connect } from "react-redux";
import { getCards, deleteCard} from '../actions';

import User from "./User";
import PropTypes from "prop-types";
import "./user.css";
import Navigation from "./Navigation";


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
      <div className="user-list">
        <Navigation />
        <div className="active-user-list">
          {!this.props.fetchingCards && this.props.cards.map(card => <User key={card.id} card={card} onClick={this.onClick} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cards: state.cards,
  fetchingCards: state.fetchingCards
});

export default connect(mapStateToProps, { getCards, deleteCard })(UserList);