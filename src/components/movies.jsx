import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./Like";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = movieId => {
    console.log(movieId);
    this.setState({ movies: this.state.movies.filter(m => m._id !== movieId) });
  };
  render() {
    return (
      <div>
        <br />
        <p>
          {this.state.movies.length > 0 &&
            "Showing " + this.state.movies.length}
          {this.state.movies.length === 0 && "There are no movies to show"}
        </p>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">genre</th>
              <th scope="col">numberInStock</th>
              <th scope="col">dailyRentalRate</th>
              <th scope="col">Like</th>
              <th scope="col"> </th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(m => (
              <tr key={m._id}>
                <td>{m.title}</td>
                <td>{m.genre.name}</td>
                <td>{m.numberInStock}</td>

                <td>{m.dailyRentalRate}</td>
                <td>
                  <Like />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDelete(m._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
