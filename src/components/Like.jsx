import React, { Component } from "react";

class Like extends Component {
  state = {
    clicked: false
  };
  render() {
    return (
      <div>
        <i class="fa fa-heart-o btn" aria-hidden="true"></i>
      </div>
    );

    //<i class="fa fa-heart" aria-hidden="true"></i>;
  }
}

export default Like;
