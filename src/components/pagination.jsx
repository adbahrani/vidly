import React, { Component } from "react";
import _ from "lodash";
import { PropTypes } from "prop-types";

class Pagination extends Component {
  state = {
    test: "test"
  };

  render() {
    const { pageSize, selected, items } = this.props;


    let pagesNumber = Math.ceil(items.length / pageSize);

    let pages = _.range(1, pagesNumber + 1);
    console.log(items, selected, pageSize);

    return (
      <ul className="pagination">
        <li>{}</li>
        {pages.map(p => (
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

Pagination.propTypes = {
  itemCount: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  selected: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Pagination;
