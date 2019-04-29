import React, { Component } from "react";
import { connect } from "react-redux";
import { getCards, deleteCard} from '../actions';

import Navigation from "./Navigation";
import AddCardForm from "./AddCardForm";

import "../styles/userProfile.css";

import AddIcon from "../img/add-icon.png";

class UserProfile extends Component {
    state = {
        displayForm: false
    }
    displayForm = e => {
        e.preventDefault();
        this.setState({ displayForm: true});
    }
    hideForm = () => {
        this.setState({ displayForm: false});
    }
    render() {
      return (
        <div className="user-profile-wrapper">
            <Navigation />
            <div className="add-card-wrapper">
                
                { this.state.displayForm ? (<AddCardForm hideForm={this.hideForm} />) : (<img src={AddIcon} className="add-card-icon" alt="" onClick={this.displayForm} />) }
                
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
  
  export default connect(mapStateToProps, { getCards, deleteCard })(UserProfile);