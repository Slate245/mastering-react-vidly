import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { getGenres } from "../services/fakeGenreService";
import { getMovie, saveMovie } from "../services/fakeMovieService";

/* const MovieForm = ({ match, history }) => {
  return (
    <div>
      <h1>Movie Form {match.params._id}</h1>
      <button
        onClick={() => history.push("/movies")}
        className="btn btn-primary"
      >
        Save
      </button>
    </div>
  );
}; */

class MovieForm extends Form {
  state = {
    genres: [],
    data: {
      _id: null,
      title: "",
      genre: "",
      numberInStock: "",
      dailyRentalRate: ""
    },
    errors: {}
  };

  schema = {
    _id: Joi.optional(),
    title: Joi.string().required(),
    genre: Joi.string().required(),
    numberInStock: Joi.number()
      .required()
      .greater(0)
      .less(100),
    dailyRentalRate: Joi.number()
      .required()
      .greater(0)
      .less(10)
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "" }, ...getGenres()];
    this.setState({ genres });

    const {
      match: {
        params: { _id }
      },
      history
    } = this.props;
    const movie = getMovie(_id);
    if (_id !== "new" && !movie) {
      history.replace("/not-found");
      return;
    }

    if (_id !== "new") {
      const data = {
        _id: movie._id,
        title: movie.title,
        genre: movie.genre.name,
        numberInStock: movie.numberInStock,
        dailyRentalRate: movie.dailyRentalRate
      };
      this.setState({ data });
    }
  }

  doSubmit = () => {
    const { history } = this.props;
    //Call the server
    saveMovie(this.state.data);
    history.push("/movies");
  };

  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          <div className="form-group">
            <label htmlFor="genre">Genre</label>
            <select
              name="genre"
              id="genre"
              className="custom-select"
              value={this.state.data.genre}
              onChange={this.handleChange}
            >
              {this.state.genres.map(genre => (
                <option value={genre.name} key={genre._id}>
                  {genre.name}
                </option>
              ))}
            </select>
            {this.state.errors["genre"] && (
              <div className="alert alert-danger">
                {this.state.errors["genre"]}
              </div>
            )}
          </div>
          {this.renderInput("numberInStock", "Number in Stock", "number")}
          {this.renderInput("dailyRentalRate", "Rate", "number")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
