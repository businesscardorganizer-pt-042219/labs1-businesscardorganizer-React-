import React from "react";
import ReactDOM from "react-dom";
import { updateCard } from "./actions";
import { connect } from "react-redux";

class CollectionRenameForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      title: ""
    };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      [event.target.email]: event.target.value,
      [event.target.title]: event.target.value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const card = this.state;
    this.props.updateCard(card);
    this.setState({ name: "", email: "", title: "" });
  };

  handleUpdate = event => {
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input
            name="name"
            value={this.state.name}
            type="text"
            onChange={this.handleInputChange}
            placeholder="Name"
          />
          <input
            name="name"
            value={this.state.email}
            type="text"
            onChange={this.handleInputChange}
            placeholder="Email"
          />
          <input
            name="name"
            value={this.state.title}
            type="text"
            onChange={this.handleInputChange}
            placeholder="Title"
          />
          <button type="submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.name,
    email: state.email,
    title: state.title
  };
};
export default connect(
  mapStateToProps,
  { updateCard }
)(CollectionRenameForm);
