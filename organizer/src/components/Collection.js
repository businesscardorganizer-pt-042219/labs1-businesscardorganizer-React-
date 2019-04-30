import React from "react";
import ReactDom from "react-dom";
import CollectionRename from "./CollectionRename";
import { updateCard } from "../actions";

class Collection extends React.Component {
  constructor() {
    super();
    this.state = {
      collection: []
    };
  }

  render() {
    return (
      <div>
        <ul>
          <li>{this.state.collection}</li>
        </ul>
      </div>
    );
  }
}
