import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./like";
import Pagination from "./pagination";
import { Paginate } from "../utils/Paginate";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageNumber: 1,
    pageSize: 4
  };

  componentDidMount() {
    let movies = this.state.movies;
    this.state.movies.forEach(m => {
      m.like = false;
    });

    this.setState({ movies });
    //this.handlePageClick(1);
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

  handlePagenation() {
    let movies = [...this.state.movies];
    let moviesPages = movies.map(m => m.page);
    let pages = moviesPages.filter((item, i, ar) => ar.indexOf(item) === i);
    return pages;
  }

  handlePageClick = page => {
    console.log(page);
    this.setState({ pageNumber: page });
  };

  render() {
    let movies = Paginate(
      this.state.movies,
      this.state.pageNumber,
      this.state.pageSize
    );
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
          items={this.state.movies}
          selected={this.state.pageNumber}
          pageSize={this.state.pageSize}
          onClick={this.handlePageClick}
        />
      </div>
    );
  }
}

export default Movies;
