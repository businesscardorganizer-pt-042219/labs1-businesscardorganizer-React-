import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { login } from '../actions';

import '../styles/loginPage.css';

import Logo from '../img/logo.png';
import SpinnerDots from './SpinnerDots';

class LoginPage extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }
    login = e => {
        e.preventDefault();
        this.props.login(this.state.credentials)
            .then(() => {
                this.props.history.push('/');            })
        this.setState({
            credentials: {
                ...this.state.credentials,
                username: '',
                password: ''
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
        // check if user is logging in or not
        // if yes -> display animation
        // if not -> check if he started typing in inputs
        // if yes -> display active button
        // if not -> display non-active button
        const isLoggingIn = this.props.isLoggingIn;
        let button;

        if (isLoggingIn === true) {
        button = <button className="btn not-active"><SpinnerDots/></button>;
        } else {
            if (this.state.credentials.username === '' && this.state.credentials.password === '') {
                button = <button className="btn not-active">Log in</button>;
            } else {
                button = <button className="btn">Log in</button>;
            }
        }
        return (
            <div className='login-page-wrapper'>
                <div className="login-side">
                    <h1 className="motto">ANYTIME.<br/>Click.<br/>Scan.<br/>Go!</h1>
                </div>
                <div className="login-page-content">
                    <div className='logo-wrapper'>
                        <img src={Logo} alt='logo of the app' />
                    </div>
                    <form onSubmit={this.login}>
                        <input
                            type='text'
                            name='username'
                            placeholder='username'
                            value={this.state.credentials.username}
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
                        {button}
                    </form>
                    <div className='login-other-options'>
                        <p>Forgot password?</p>
                    </div>
                    <div className='create-account'>
                        <p>First time here? <Link to='/sign-up'>Create your account</Link></p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      isLoggingIn: state.isLoggingIn
    };
};

export default connect(mapStateToProps, { login })(LoginPage);