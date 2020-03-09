import React, { Component } from "react";
import _ from "lodash";

const Pagination = props => {
  let count = props.itemCount;
  let pagesCount = Math.ceil(count / props.pages);
  if (pagesCount === 1) return null;
  let pages = _.range(1, pagesCount + 1);

  return (
    <ul className="pagination">
      {pages.map(p => (
        <li
          key={p}
          className={`page-item ${+props.selected == p ? "active" : " "}`}
          onClick={() => props.onClick(p)}
        >
          <a className="page-link" href="#">
            {p}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
