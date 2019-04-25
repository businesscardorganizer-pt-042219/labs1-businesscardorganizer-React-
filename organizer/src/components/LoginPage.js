import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/loginPage.css';

import Logo from '../img/logo.png';

class LoginPage extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }
    login = e => {
        e.preventDefault();
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
        return (
            <div className='login-page-wrapper'>
                <div className="login-side">
                    <h1 className="motto">ANYTIME.<br/>Click.<br/>Scan.<br/>Go!</h1>
                </div>
                <div className="login-page-content">
                    <div className='logo-wrapper'>
                        <img src={Logo} />
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
                        {/* Check if user started to type something */}
                        {(this.state.credentials.username || this.state.credentials.password !== '') ? (<button className="btn">Log in</button>) : (<button className="btn not-active">Log in</button>)}
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

export default LoginPage;