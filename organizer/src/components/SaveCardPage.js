import React from 'react';
import { connect } from "react-redux";
import { getCardById, addCard } from '../actions';

import User from "./User";
import Navigation from "./Navigation";
import SpinnerDataLoad from "./SpinnerDataLoad";


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
        const collectionTag = {collection_tag: this.state.collections};
        const newCard = {...cardById, ...collectionTag };
        console.log(newCard);
        // this.props.addCard(newCard);
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
                            <form className="save-to-collection" onSubmit={this.addCard}>
                                <select name="collections" id="select-form" onChange={this.onChange}>
                                    <option value="default">All cards</option>
                                    {/* TEST */}
                                    <option value="business">Business</option>
                                    <option value="friends">Friends</option>
                                    {/* here I need to map through all collections names and return option tags*/}
                                </select>
                                <button>Save to collection</button>
                            </form>
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