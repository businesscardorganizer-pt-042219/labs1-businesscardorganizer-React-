import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/loginPage.css';

import Logo from '../img/logo.png';


class SignUpPage extends React.Component {
    state = {
        credentials: {
            username: '',
            password: '',
            email: ''
        }
    }
    signUp = e => {
        e.preventDefault();
        this.setState({
            credentials: {
                ...this.state.credentials,
                username: '',
                password: '',
                email: ''
            }
        })
    }
    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }
    render() {
        return (
            <div className='sign-up-wrapper'>
                <div className="sign-up-side">
                    <h1 className="motto">ANYTIME.<br/>Click.<br/>Scan.<br/>Go!</h1>
                </div>
                <div className="sign-up-content">
                    <div className='logo-wrapper'>
                        <img src={Logo} alt='logo of the app' />
                    </div>
                    <form onSubmit={this.signUp}>
                        <input
                            type='text'
                            name='username'
                            placeholder='username'
                            value={this.state.credentials.username}
                            onChange={this.handleChange}
                            required
                        />
                        <input
                            type='email'
                            name='email'
                            placeholder='email'
                            value={this.state.credentials.email}
                            onChange={this.handleChange}
                            required
                        />
                        <input 
                            type='password'
                            name='password'
                            placeholder='password'
                            value={this.state.credentials.password}
                            onChange={this.handleChange}
                            required
                        />
                        {/* Check if user started to type something */}
                        {(this.state.credentials.username || this.state.credentials.password || this.state.credentials.email !== '') ? (<button className="btn">Sign Up</button>) : (<button className="btn not-active">Sign Up</button>)}
                    </form>
                    <div className='sign-up-other-options'>
                        <Link to="/login">
                            <p>Have an account?</p>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUpPage;