import React, { Component } from "react";

class MovieForm extends Component {
  handleSave = () => {
    this.props.history.replace("/movies");
  };

  render() {
    return (
      <div>
        <h1>Movie Form {this.props.match.params._id}</h1>
        <button
          onClick={this.handleSave}
          className="btn btn-primary btn-sm m-2"
        >
          Save
        </button>
      </div>
    );
  }
}

export default MovieForm;
