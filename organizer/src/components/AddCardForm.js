import React from 'react';
import { connect } from "react-redux";
import { addCard } from '../actions';

import '../styles/addCardForm.css';

class AddCardForm extends React.Component {
    state = {
        data: {
            firstName: '',
            lastName: '',
            company: '',
            title: '',
            phone: '',
            email: '',
            linkedIn: '',
            gitHub: '',
            file: null,
            fileName: 'Choose a file'
        },
        userName: "Kasia", // we need to change it to the username data
        collections: "" // check if it's own card or new card for the collection
    }
    /* Create user's profile card */
    submit = e => {
        e.preventDefault();
        let ownFlagValue = false;
        console.log(this.state.collections);
        if(this.state.collections === "own_flag" || this.state.collections === "") {
            ownFlagValue = true;
        } else {
            ownFlagValue = false;
        }
        const newCard = {
            first_name: this.state.data.firstName,
            last_name: this.state.data.lastName,
            company_name: this.state.data.company,
            work_title: this.state.data.title,
            cell_phone: this.state.data.phone,
            email: this.state.data.email,
            linkedIn: this.state.data.linkedIn,
            github: this.state.data.gitHub,
            own_flag: ownFlagValue
            // file: this.state.file
        }
        this.props.addCard(newCard);
        this.setState({
            data: {
                ...this.state.data,
                firstName: '',
                lastName: '',
                company: '',
                title: '',
                phone: '',
                email: '',
                linkedIn: '',
                gitHub: '',
                file: null,
                fileName: 'Choose a file'
            }
        })
        this.props.hideForm();
    }
    handleChange = e => {
        this.setState({
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value
            }
        })
        if(e.target.name === 'file') {
            if(e.target.files[0].name !== undefined) {
                this.setState({
                    data: {
                        ...this.state.data,
                        fileName: e.target.files[0].name
                    }
                })
            }
        }
    }
    isOwn = e => {
        let selectedTag = e.target.value;
        this.setState({
            ...this.state,
            collections: selectedTag
        })
    }
    render() {
        return (
            <div className='add-card-form-wrapper'>
                <div className="add-card-form-content">
                    <div className="add-card-form-header">
                        <h1>Hi, {this.state.userName}!</h1>
                        <p>Fill in some basic information and we'll create card for you to share with the people you meet!</p>
                    </div>
                    <form onSubmit={this.submit}>
                        <input
                            className="first-name"
                            type='text'
                            name='firstName'
                            placeholder='First Name'
                            value={this.state.data.firstName}
                            onChange={this.handleChange}
                            required
                        />
                        <span>✽ required field</span>
                        <input
                            type='text'
                            name='lastName'
                            placeholder='Last Name'
                            value={this.state.data.lastName}
                            onChange={this.handleChange}
                        />
                        <select name="collections" id="select-form" onChange={this.isOwn}>
                            <option value="own_flag">My cards</option>
                            <option value="default">All cards</option>
                            {/* here I need to map through all collections names and return option tags*/}
                        </select>
                        <input
                            type='text'
                            name='company'
                            placeholder='Company'
                            value={this.state.data.company}
                            onChange={this.handleChange}
                        />
                        <input
                            type='text'
                            name='title'
                            placeholder='Title'
                            value={this.state.data.title}
                            onChange={this.handleChange}
                        />
                        <input
                            className="phone"
                            type='tel'
                            name='phone'
                            placeholder='Phone'
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            value={this.state.data.phone}
                            onChange={this.handleChange}
                        />
                        <span>Format: 123-456-7890</span>
                        <input
                            type='email'
                            name='email'
                            placeholder='Email'
                            value={this.state.data.email}
                            onChange={this.handleChange}
                        />
                        <input 
                            type='url'
                            name='linkedIn'
                            placeholder='LinkedIn'
                            value={this.state.data.linkedIn}
                            onChange={this.handleChange}
                        />
                        <input 
                            type='url'
                            name='gitHub'
                            placeholder='GitHub'
                            value={this.state.data.gitHub}
                            onChange={this.handleChange}
                        />
                        <p>Select a photo of yourself:</p>
                        <input
                            className="inputfile"
                            type="file"
                            name="file"
                            id="file"
                            accept="image/*"
                            data-multiple-caption="{count} files selected"
                            onChange={this.handleChange}
                        />
                        <label htmlFor="file">{this.state.data.fileName}</label>
                        {/* Check if user started to type something */}
                        {(this.state.data.firstName || this.state.data.lastName || this.state.data.company || this.state.data.title || this.state.data.phone || this.state.data.email || this.state.data.linkedIn || this.state.data.gitHub !== '') ? (<button className="btn">Create card</button>) : (<button className="btn not-active">Create card</button>)}
                    </form>
                </div>
                <div className="hide-form-arrow" onClick={this.props.hideForm}>⬆︎</div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cards: state.cards,
    savingCard: state.savingCard
  });
  
  export default connect(mapStateToProps, { addCard })(AddCardForm);