import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/homePage.css';

import Musk from '../img/Elon_Musk.jpg';

class HomePage extends Component {
    render() {
        return (
            <div className="home-page-wrapper">
                {/* Background image */}
                <img src={Musk} alt=""/>
                {/* Page content */}
                <div className="home-content">
                    <h1 className="home-page-motto">Never miss a contact!</h1>
                    <div className="home-links-wrapper">
                        <Link to="/login">
                            <div className="login-link-wrapper">
                                <p>Already with us?</p>
                                <p className="arrow">➤</p>
                            </div>
                        </Link>
                        <Link to="/sign-up">
                            <div className="signin-link-wrapper">
                                <p>Ready to go?</p>
                                <p className="arrow">➤</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;
