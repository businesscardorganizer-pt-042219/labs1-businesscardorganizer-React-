import React, { Component } from "react";
import { connect } from "react-redux";
<<<<<<< HEAD
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
=======
import { getCards, deleteCard} from '../actions';

import Navigation from "./Navigation";
import AddCardForm from "./AddCardForm";
import QRCode from "../../node_modules/qrcode-react/lib/index";

import "../styles/userProfile.css";

import AddIcon from "../img/add-icon.png";

class UserProfile extends Component {
    state = {
        displayForm: false
    }
    componentDidMount() {
        // this.props.getUserCard(/* What type of id should I put there? */);
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


                {/* QRCode example. We should add dinamic route with an id of particular card in there */}

                <QRCode className='qrcode' value='https://www.youtube.com/watch?v=oyB5OZo3XsY'
                    size={300}
                    fgColor='rgb(39, 39, 39)'
                    bgColor='transparent'
                    logo='http://google.com'/>
            </div>
        </div>
>>>>>>> 434eb6df8f9f93f1b8e444a7d566da2f190b2e7e
    );
  }
}

const mapStateToProps = state => ({
<<<<<<< HEAD
  cards: state.cards,
  getCards: state.getCards,
  deletingCard: state.deletingCard
});

export default connect(
  mapStateToProps,
  { getCards, deleteCard }
)(UserProfile);
=======
    usersCard: state.usersCard,
    fetchingCards: state.fetchingCards,
    deletingCard: state.deletingCard
  });
  
export default connect(mapStateToProps, { getCards, deleteCard })(UserProfile);
>>>>>>> 434eb6df8f9f93f1b8e444a7d566da2f190b2e7e
