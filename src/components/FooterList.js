import React, { Component } from "react";

class FooterList extends Component {
  render() {
    const { name, link } = this.props;
    return (
      <div>
        <li>
          <a href={link}>{name}</a>
        </li>
      </div>
    );
  }
}
export default FooterList;
