import React, { Component } from "react";

class Like extends Component {
  render() {
    return (
      <div>
        <i className={this.checkLikes()} onClick={this.props.onLike}></i>
      </div>
    );
  }

  checkLikes() {
    let classes = "btn fa ";
    classes += this.props.status ? "fa-heart" : "fa-heart-o";
    return classes;
  }
}

export default Like;
