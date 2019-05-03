import React, { Component } from "react";
import { connect } from "react-redux";
import { getCards, deleteCard } from '../actions';

import Navigation from "./Navigation";
import AddCardForm from "./AddCardForm";
import User from "./User";
import SpinnerDataLoad from "./SpinnerDataLoad";

import "../styles/userProfile.css";


import AddIcon from "../img/add-icon.png";

class UserProfile extends Component {
    state = {
        displayForm: false
    }
    componentDidMount() {
        this.props.getCards();
    }
    displayForm = e => {
        e.preventDefault();
        this.setState({ displayForm: true});
    }
    hideForm = () => {
        this.setState({ displayForm: false});
    }
    onClick = (id) => {
        this.props.deleteCard(id);
    }
    render() {
        if (this.props.savingCard) {
            this.props.getCards();
        }
      return (
        <div className="user-profile-wrapper">
            <Navigation />
            <div className="add-card-wrapper">
                
                { this.state.displayForm ? (<AddCardForm hideForm={this.hideForm} />) : (<img src={AddIcon} className="add-card-icon" alt="" onClick={this.displayForm} />) }

                { this.props.fetchingCards ? <SpinnerDataLoad /> : (
                    this.props.cards
                        .filter(card => {
                            if (card.own_flag === "1") {
                                return card
                            } else {
                                return null
                            }
                        })
                        .map(card => (
                            <User key={card.id} card={card} onClick={this.onClick} hideControls=""/>
                        ))
                    )
                }
            </div>
        </div>
    );
  }
}

const mapStateToProps = state => ({
    cards: state.cards,
    fetchingCards: state.fetchingCards,
    deletingCard: state.deletingCard,
    updatingCard: state.updatingCard,
    savingCard: state.savingCard
  });
  
export default connect(mapStateToProps, { getCards, deleteCard })(UserProfile);