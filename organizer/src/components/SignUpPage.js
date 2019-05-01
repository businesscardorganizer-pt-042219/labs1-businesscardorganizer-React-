import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { register } from '../actions';

import '../styles/loginPage.css';

import Logo from '../img/logo.png';
import SpinnerDots from './SpinnerDots';


class SignUpPage extends React.Component {
    state = {
        credentials: {
            username: '',
            password: '',
            // email: ''
        }
    }
    signUp = e => {
        e.preventDefault();
        console.log(this.state.credentials);
        this.props.register(this.state.credentials)
            .then(() => {
                this.props.history.push('/');
            })
        this.setState({
            credentials: {
                ...this.state.credentials,
                username: '',
                password: '',
                // email: ''
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
        // check if user is signing up or not
        // if yes -> display animation
        // if not -> check if he started typing in inputs
        // if yes -> display active button
        // if not -> display non-active button
        const isSigningIn = this.props.isSigningIn;
        let button; // button declaration

        if (isSigningIn === true) {
            button = <button className="btn not-active"><SpinnerDots/></button>;
        } else {
            if (this.state.credentials.username === '' && this.state.credentials.password === '' && this.state.credentials.email === '') {
                button = <button className="btn not-active">Sign Up</button>;
            } else {
                button = <button className="btn">Sign Up</button>;
            }
        }
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
                        {button}
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

const mapStateToProps = state => {
    return {
        isSigningIn: state.isSigningIn
    };
};

export default connect(mapStateToProps, { register })(SignUpPage);