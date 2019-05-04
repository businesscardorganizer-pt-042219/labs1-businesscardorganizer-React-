import React from 'react';
import { connect } from "react-redux";
import { getCardById, addCard } from '../actions';

import User from "./User";
import Navigation from "./Navigation";
import SpinnerDataLoad from "./SpinnerDataLoad";

import '../styles/saveCard.css';


class SaveCardPage extends React.Component {
    state = {
        collections: ""
    }
    componentDidMount(props) {
        const id = this.props.match.params.id;
        this.props.getCardById(id);
        // I need to have all user collections names in here to map through them inside select options and return 
    }
    onChange = e => {
        let selectedTag = e.target.value;
        this.setState({
            ...this.state,
            collections: selectedTag
        })
    }
    addCard = e => {
        e.preventDefault();
        const cardById = this.props.cardById;
        const newCard = {...cardById, own_flag: false, id: null };
        console.log(newCard);
        this.props.addCard(newCard);
        this.props.history.push("/user-list");
    }
    render() {    
        return (
            <div className="save-card-wrapper">
                <Navigation />
                {
                    this.props.fetchingCards && <SpinnerDataLoad /> 
                }
                {
                    /* Check if the card is fetched */
                    this.props.cardById ? 
                    (
                        <div className="save-card">
                            <User card={this.props.cardById} />
                            <div className="save-card-form-wrapper">
                                <form className="save-to-collection" onSubmit={this.addCard}>
                                    <select name="collections" id="select-form" onChange={this.onChange}>
                                        <option value="default">All cards</option>
                                        
                                        {/* here I need to map through all collections names and return option tags*/}
                                    </select>
                                    <button className="btn">Save to collection</button>
                                </form>
                            </div>
                        </div>
                    ) : (
                        /* display error message to user if there's no card with such id */
                        <div className="no-card-found">
                            <h2>No card found!</h2>
                        </div>
                    )}

            </div>
    
        );
    }
}
const mapStateToProps = state => ({
    cardById: state.cardById,
    fetchingCards: state.fetchingCards
  });
  
  export default connect(mapStateToProps, { getCardById, addCard })(SaveCardPage);