import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { getEvents, addEvent, getCardsByEvent, getCards } from '../actions';
import moment from 'moment';

import "../styles/collectionTabs.css";

import AddIcon from "../img/add-icon.png";

class CollectionTabs extends Component {
    state = {
        displayForm: false,
        name: ""
    }
    componentDidMount() {
        this.props.getEvents();        
    }
    displayForm = e => {
        e.preventDefault();
        this.setState({ displayForm: true});
    }
    hideForm = () => {
        this.setState({ displayForm: false});
    }
    handleChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }
    onSubmit = e => {
        e.preventDefault();
        const date = new Date();
        const time = moment(date).format("M.D.Y");
        const newEvent = {
            event_name: this.state.name,
            event_date: time
        }
        console.log(newEvent);
        this.props.addEvent(newEvent);
        this.setState({
            ...this.state,
            name: ""
        })
        this.hideForm();
    }
    fetchEventCards = id => {
        this.props.getCardsByEvent(id);
    }
    render() {
        return (
            <div className="collection-tabs-wrapper">
                {
                    this.props.events && (
                        <div className="collection-tabs">
                        <NavLink to="/user-list" activeClassName="active-btn">
                            <div className="btn" onClick={this.props.getCards}>All</div>
                        </NavLink>
                        {   this.props.events.map(event => 
                            <NavLink to={`/events/${event.event_name}`} activeClassName="active-btn" key={event.id} onClick={() => this.fetchEventCards(event.id)}>
                                <div className="btn" key={event.id}>{event.event_name}</div>
                            </NavLink>
                        )}
                        </div>
                    )
                }
                <div className="add-tab-wrapper">
                    { this.state.displayForm ? (
                        <div className="add-form-wrapper">
                            <form onSubmit={this.onSubmit}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="name of the collection"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                />
                                <button type="submit" className="btn">Add</button>
                            </form>
                            <div className="hide-form-arrow" onClick={this.hideForm}>⬆︎</div>
                        </div>
                    ) : (
                        <div className="add-to-collection" onClick={this.displayForm}>
                            <img src={AddIcon} className="add-card-icon" alt="" />
                            <p>New collection</p>
                        </div>
                    
                    ) }

                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    events: state.events,
    fetchingEvents: state.fetchingEvents
});

export default connect(mapStateToProps, { getEvents, addEvent, getCardsByEvent, getCards })(CollectionTabs);