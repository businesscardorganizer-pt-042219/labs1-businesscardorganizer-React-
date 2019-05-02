import React, { Component } from "react";
import { connect } from "react-redux";
import { getEvents, addEvent } from '../actions';

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
        const newEvent = {
            event_name: this.state.name,
            event_date: "1.9.2019"
        }
        console.log(newEvent);
        this.props.addEvent(newEvent);
        /*
        I NEED SOMETHING IN HERE TO UPDATE EVENT PROPS             
        .then()
        window.location.reload();
        */
        this.setState({
            ...this.state,
            name: ""
        })
        this.hideForm();
    }
    render() {
        return (
            <div className="collection-tabs-wrapper">
                {
                    this.props.events && (
                        <div className="collection-tabs">
                            <button className="btn">All</button>
                            {this.props.events.map(event => <button className="btn" key={event.id}>{event.event_name}</button>)}
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

export default connect(mapStateToProps, { getEvents, addEvent })(CollectionTabs);