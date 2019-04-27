import React, { Component } from "react";

import Navigation from "./Navigation";
import AddCardForm from "./AddCardForm";

class UserProfile extends Component {
    render() {
      return (
        <div className="user-profile-wrapper">
            <Navigation />
            <AddCardForm />
        </div>
    );
  }
}

export default UserProfile;