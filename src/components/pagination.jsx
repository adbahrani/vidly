import React, { Component } from "react";
import { Paginate } from "../utils/Paginate";
import _ from "lodash";

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

export default Pagination;
