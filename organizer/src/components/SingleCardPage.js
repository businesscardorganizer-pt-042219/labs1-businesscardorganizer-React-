import React from 'react';
import { connect } from "react-redux";
import { getCardById } from '../actions';

import User from "./User";
import Navigation from "./Navigation";
import SpinnerDataLoad from "./SpinnerDataLoad";

class SingleCardPage extends React.Component {
    componentDidMount(props) {
        const id = this.props.match.params.id;
        this.props.getCardById(id);
    }
    render() {    
        return (
            <div className="single-card-wrapper">
                <Navigation />
                {
                    this.props.fetchingCards && <SpinnerDataLoad /> 
                }
                {
                    /* Check if the card is fetched */
                    this.props.cardById ? 
                    (
                        <div className="single-card">
                            <User card={this.props.cardById} />
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
  
  export default connect(mapStateToProps, { getCardById })(SingleCardPage);