import React, { Component } from "react";

class Like extends Component {
  setIcon() {
    if (this.props.item.isLiked) return "fa fa-heart";
    else return "fa fa-heart-o";
  }
  render() {
    const { onLikeClick, item } = this.props;
    return (
      <div onClick={() => onLikeClick(item)}>
        <i className={this.setIcon()} aria-hidden="true" />
      </div>
    );
  }
}

export default Like;
