import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/homePage.css';

import Background from '../img/home-background.jpg';


class HomePage extends Component {
    render() {
        return (
            <div className="home-page-wrapper">
                {/* Page content */}
                <div className="home-content">
                    <div className="top-wrapper">
                        <div className="logo-wrapper"></div>
                        <h1 className="home-page-motto">ANYTIME.<br/>Click. Scan. Go!</h1>
                    </div>
                    <div className="home-links-wrapper">
                        <div className="login-link-wrapper">
                            <Link to="/login">
                                <button className='btn'>Login</button>
                            </Link>
                        </div>
                        <div className="signun-link-wrapper">
                            <p className="signup-text">Don't have an account?</p>
                            <Link to="/sign-up">
                                <p>Sign up here</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;
