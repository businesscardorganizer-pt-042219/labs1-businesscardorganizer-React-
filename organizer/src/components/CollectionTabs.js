import React, { Component } from "react";

import "../styles/collectionTabs.css";

import AddIcon from "../img/add-icon.png";

class CollectionTabs extends Component {
    state = {
        displayForm: false,
        tabs: [],
        name: ""
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
        this.state.tabs.push(this.state.name);
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
                    this.state.tabs && (
                        <div className="collection-tabs">
                            {this.state.tabs.map((tab, index) => <button className="btn" key={index}>{tab}</button>)}
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

export default CollectionTabs;