import React, { Component } from "react";

class ListGroup extends Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <ul className="list-group">
        <li className="list-group-item disabled active">All Genera</li>
        <li className="list-group-item">1</li>
      </ul>
    );
  }
}

export default ListGroup;
