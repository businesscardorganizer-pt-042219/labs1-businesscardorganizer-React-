import React from "react";
import ReactDom from "react-dom";
import CollectionRename from "./CollectionRename";
import User from "./User";

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
          {this.state.collection.map((collection, index) => {
            <li />;
          })}
        </ul>
      </div>
    );
  }
}
