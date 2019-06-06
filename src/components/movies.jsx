import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Movie from "./movie";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = movieID => {
    const movies = this.state.movies.filter(m => m._id !== movieID);
    this.setState({ movies });
  };

  render() {
    var isMovie = this.state.movies.length;

    if (!isMovie) return <p> There are no movies in the database </p>;
    else {
      return (
        <div>
          <p> Showing {this.state.movies.length} movies in the database</p>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Stock</th>
                <th scope="col">Rate</th>
              </tr>
            </thead>

            <tbody>
              {this.state.movies.map(movie => (
                <Movie
                  key={movie._id}
                  onDelete={this.handleDelete}
                  movie={movie}
                />
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default Movies;
