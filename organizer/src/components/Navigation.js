import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

import '../styles/navigation.css';
import Logo from '../img/logo.png';
import LogoutIcon from "../img/logout-icon.png";
import UserIcon from "../img/user-icon.png";

class Navigation extends Component {
    logout = (e) => {
        localStorage.removeItem("token");
    }
    render() {
        return (
            <div className="navigation">
                <div className="nav-logo-wrapper">
                    <img className="nav-logo" src={Logo} alt='logo of the app' />
                </div>
                <div className="nav-options">

                    <NavLink activeClassName="active" to='/user-list'>Collections</NavLink>

                    <Link to='/' className="link-nav-user"><img className="nav-user" src={UserIcon} alt="gender neutral user" /></Link>

                    <Link to='/login' className="link-nav-logout"><img className="nav-logout" src={LogoutIcon} onClick={this.logout} alt="log out"/></Link>

                </div>
            </div>
        )
    }
}

export default Navigation;