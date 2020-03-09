import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./like";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    selectedPage: 1
  };

  componentDidMount() {
    let movies = this.state.movies;
    this.state.movies.forEach(m => {
      m.like = false;
    });

    this.setState({ movies });
    //this.handlePageClick(1);
    console.log(movies);
  }

  handleDelete = movieId => {
    console.log(movieId);
    this.setState({ movies: this.state.movies.filter(m => m._id !== movieId) });
  };

  handlelLike = movie => {
    let movies = [...this.state.movies];
    let index = movies.indexOf(movie);
    movies[index].like = !movies[index].like;
    this.setState({ movies });
  };

  handlePageClick = page => {
    this.setState({ selectedPage: page });
  };

  render() {
    if (this.state.movies.length === 0) return <p> There are no Movies</p>;

    const movies = paginate(
      this.state.movies,
      this.state.selectedPage,
      this.state.pageSize
    );
    return (
      <div>
        <br />
        {this.state.movies.length > 0 && "Showing " + this.state.movies.length}

        <br />
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
            {movies.map(m => (
              <tr key={m._id}>
                <td>{m.title}</td>
                <td>{m.genre.name}</td>
                <td>{m.numberInStock}</td>

                <td>{m.dailyRentalRate}</td>
                <td>
                  <Like status={m.like} onLike={() => this.handlelLike(m)} />
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
        <br />

        <Pagination
          pages={this.state.pageSize}
          itemCount={this.state.movies.length}
          selected={this.state.selectedPage}
          onClick={this.handlePageClick}
        />
      </div>
    );
  }
}

export default Movies;
