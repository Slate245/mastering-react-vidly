import React, { Component } from "react";

class Pagination extends Component {
  state = {};

  getClasses(page) {
    let classes = "page-item";
    if (page.isCurrent) classes += " active";
    return classes;
  }

  render() {
    return (
      <nav aria-label="Page navigation">
        <ul className="pagination">
          {this.props.pages.map(page => (
            <li className={this.getClasses(page)}>
              <a href="#" className="page-link">
                {page.pageNumber}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
