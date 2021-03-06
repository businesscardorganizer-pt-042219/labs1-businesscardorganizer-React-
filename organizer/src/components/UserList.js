import React from "react";
import { connect } from "react-redux";
import { getCards, deleteCard} from '../actions';


import User from "./User";
import Navigation from "./Navigation";
import CollectionTabs from "./CollectionTabs";

import SpinnerDataLoad from "./SpinnerDataLoad";

import "../styles/user.css";

class UserList extends React.Component {
  constructor() {
    super();
    this.state = {
      card: []
    };
  }
  componentDidMount() {
    if(this.props.cards.length === 0) {
      this.props.getCards();
    }
  }
  onClick = (id) => {
    this.props.deleteCard(id);
  }

  render() {
    return (
      <div className="user-list">
        <Navigation onClick={this.props.getCards} />
        <CollectionTabs />
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
              <User key={card.id} card={card} onClick={this.onClick} hideControls="" location={this.props.location} />
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