import React, { Component } from "react";
import { connect } from "react-redux";
import { getCards, deleteCard} from '../actions';

import Navigation from "./Navigation";
import AddCardForm from "./AddCardForm";
import User from "./User";
import QRCode from "../../node_modules/qrcode-react/lib/index";
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
      return (
        <div className="user-profile-wrapper">
            <Navigation />
            <div className="add-card-wrapper">
                
                { this.state.displayForm ? (<AddCardForm hideForm={this.hideForm} />) : (<img src={AddIcon} className="add-card-icon" alt="" onClick={this.displayForm} />) }

                { this.props.fetchingCards ? <SpinnerDataLoad /> :
                (this.props.cards
                    .filter(card => {
                            if (card.own_flag === "1") {
                                return card
                            } else {
                                return null
                            }
                        })
                    .map(card => (
                    <User key={card.id} card={card} onClick={this.onClick} hideControls=""/>
                    )
                ))}


                {/* QRCode example. We should add dinamic route with an id of particular card in there */}

                {/*<QRCode className='qrcode' value='https://hopeful-ride-580fdd.netlify.com/user-list'
                    size={300}
                    fgColor='rgb(39, 39, 39)'
                    bgColor='transparent'/>
                */}
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