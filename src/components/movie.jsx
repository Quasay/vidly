import React, { Component } from "react";
import Likes from "./likes";

class Movie extends Component {
  raiseSort = path => {
    const oldPath = this.props.sortColumn.path;
    let sortColumn;

    if (oldPath === path) {
      let sortOrder = this.props.sortColumn.order === "asc" ? "desc" : "asc";
      sortColumn = { path, order: sortOrder };
    } else sortColumn = { path, order: "asc" };

    this.props.onSort(sortColumn);
  };

  render() {
    const { paginatedMovies } = this.props;

    return (
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => this.raiseSort("title")}>Title</th>
            <th onClick={() => this.raiseSort("genre.name")}>Genre</th>
            <th onClick={() => this.raiseSort("numberInStrock")}>Stock</th>
            <th onClick={() => this.raiseSort("dailyRentalRate ")}>Rate</th>
          </tr>
        </thead>

        <tbody>
          {paginatedMovies.map(movie => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>

              <td>
                <Likes
                  liked={movie.liked}
                  onClick={() => this.props.likeToggler(movie)}
                />
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm m-2"
                  onClick={() => this.props.onDelete(movie._id)}
                >
                  {" "}
                  Delete{" "}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Movie;
