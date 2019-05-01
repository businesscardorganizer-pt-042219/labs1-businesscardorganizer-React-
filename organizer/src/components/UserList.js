import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCards, deleteCard} from '../actions';


import User from "./User";
import Navigation from "./Navigation";

import SpinnerDataLoad from "./SpinnerDataLoad";

import "./user.css";


class UserList extends React.Component {
  constructor() {
    super();
    this.state = {
      card: []
    };
  }
  componentDidMount() {
    this.props.getCards();
  }
  onClick = (id) => {
    this.props.deleteCard(id);
  }

  render() {
    return (
      <div className="user-list">
        <Navigation />
        <div className="active-user-list">
          { this.props.fetchingCards ? <SpinnerDataLoad /> :
          (this.props.cards
            .filter(card => {
                    if (card.own_flag !== "1") {
                        return card
                    } else {
                        return null
                    }
                })
            .map(card => (
              <User key={card.id} card={card} onClick={this.onClick} hideControls=""/>
            )
          ))}
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

export default connect(mapStateToProps, { getCards, deleteCard })(UserList);