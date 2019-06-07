import React, { Component } from "react";

class Movie extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.movie.title}</td>
        <td>{this.props.movie.genre.name}</td>
        <td>{this.props.movie.numberInStock}</td>
        <td>{this.props.movie.dailyRentalRate}</td>

        <td>
          <i className="far fa-heart" />
        </td>
        <td>
          <button
            className="btn btn-danger btn-sm m-2"
            onClick={() => this.props.onDelete(this.props.movie._id)}
          >
            {" "}
            Delete{" "}
          </button>
        </td>
      </tr>
    );
  }
}

export default Movie;
