import React from 'react';
import { connect } from "react-redux";
import { getCardById, editCard, getCards } from '../actions';

import Navigation from "./Navigation";
import CardForm from "./CardForm";

import '../styles/addCardForm.css';

class EditCard extends React.Component {
    componentDidMount(props) {
        const id = this.props.match.params.id;
        this.props.getCardById(id);
    }
    onSubmit = (id, updatedCard) => {
        this.props.editCard(id, updatedCard);
        this.props.getCards();
        this.props.history.push("/");
    }
    render() {
        return (
            <div className="edit-card-wrapper">
                <Navigation />
                {!this.props.fetchingCards && <CardForm card={this.props.cardById} onSubmit={this.onSubmit} />}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cardById: state.cardById,
    fetchingCards: state.fetchingCards
});

export default connect(mapStateToProps, { getCardById, editCard, getCards })(EditCard);