import React from 'react';

class CardForm extends React.Component {
    state = {
        data: {
            firstName: this.props.card.first_name,
            lastName: this.props.card.last_name,
            company: this.props.card.company_name,
            title: this.props.card.work_title,
            phone: this.props.card.cell_phone,
            email: this.props.card.email,
            linkedIn: this.props.card.linkedIn,
            gitHub: this.props.card.github
        }
    }
    submit = e => {
        e.preventDefault();
        const updatedCard = {
            first_name: this.state.data.firstName,
            last_name: this.state.data.lastName,
            company_name: this.state.data.company,
            work_title: this.state.data.title,
            cell_phone: this.state.data.phone,
            email: this.state.data.email,
            linkedIn: this.state.data.linkedIn,
            github: this.state.data.gitHub
        }
        this.props.onSubmit(this.props.card.id, updatedCard);
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
        // this.props.history.push('/');
    }
    handleChange = e => {
        this.setState({
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value
            }
        })
    }
    render() {
        return (
            <div className="card-form-wrapper">
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
                    {/* Check if user started to type something */}
                    {(this.state.data.firstName || this.state.data.lastName || this.state.data.company || this.state.data.title || this.state.data.phone || this.state.data.email || this.state.data.linkedIn || this.state.data.gitHub !== '') ? (<button className="btn">Update card</button>) : (<button className="btn not-active">Update card</button>)}
                </form>
            </div>
        )
    }

}

export default CardForm;