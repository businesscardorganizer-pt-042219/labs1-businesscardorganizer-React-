import React, { Component } from "react";
import { connect } from "react-redux";
import { getCards, deleteCard } from "../actions";

import Navigation from "./Navigation";
import AddCardForm from "./AddCardForm";
import QRCode from "qrcode-react";

// import "../styles/userProfile.css";

class UserProfile extends Component {
  state = {
    displayForm: false,
    valueForQRCode: "",
    inputValue: ""
  };
  displayForm = e => {
    e.preventDefault();
    this.setState({ displayForm: true });
  };
  hideForm = () => {
    this.setState({ displayForm: false });
  };
  textInputValue = () => {
    this.setState({ valueForQRcode: this.state.inputValue });
  };
  render() {
    return (
      <div className="user-profile-wrapper">
        <Navigation />
        <AddCardForm />

        {/* QRCode example. We should add dinamic route with an id of particular card in there */}
        <QRCode
          value={this.state.valueForQRCode}
          level="M"
          fgcolor="#000000"
          bgcolor="#FFFFFF"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cards: state.cards,
  getCards: state.getCards,
  deletingCard: state.deletingCard
});

export default connect(
  mapStateToProps,
  { getCards, deleteCard }
)(UserProfile);
