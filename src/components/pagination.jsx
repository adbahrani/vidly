import React, { Component } from "react";

class Pagination extends Component {
  render() {
    console.log(this.props.count);
    return (
      <ul className="pagination">
        {this.props.pages.map(p => (
          <li
            key={p}
            className={`page-item ${
              +this.props.selected == p ? "active" : " "
            }`}
            onClick={() => this.props.onClick(p)}
          >
            <a className="page-link" href="#">
              {p}
            </a>
          </li>
        ))}
      </ul>
    );
  }
}

export default Pagination;
