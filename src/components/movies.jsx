import React, { Component } from "react";
import { getGenres } from "../services/fakeGenreService";
import { getMovies } from "../services/fakeMovieService";
import Movie from "./movie";
import Pages from "./pages";
import ListGroup from "./listGroup";
import { paginate } from "../utilities/paginate";
import _ from "lodash"; // Package used for mapping array !

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
    yum: "A secret message!"
  };

  componentDidMount() {
    this.setState({
      movies: getMovies(),
      genres: [...getGenres()]
    });
  }

  handleDelete = movieID => {
    const movies = this.state.movies.filter(m => m._id !== movieID);
    this.setState({ movies });
  };

  handleLikeToggler = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);

    if (!movies[index].liked) movies[index].liked = true;
    else movies[index].liked = false;

    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  render() {
    const {
      pageSize,
      currentPage,
      movies,
      selectedGenre,
      sortColumn
    } = this.state;

    var isMovie = this.state.movies.length;

    if (!isMovie) return <p> There are no movies in the database </p>;

    const filteredMovies = selectedGenre
      ? movies.filter(m => m.genre._id === selectedGenre._id)
      : movies;

    const sorted = _.orderBy(
      filteredMovies,
      [sortColumn.path],
      [sortColumn.order]
    );

    const paginatedMovies = paginate(sorted, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            onItemSelect={this.handleGenreSelect}
            selectedItem={this.state.selectedGenre}
          />
        </div>
        <div className="col">
          <p> Showing {filteredMovies.length} movies in the database</p>

          <Movie
            onDelete={this.handleDelete}
            likeToggler={this.handleLikeToggler}
            onSort={this.handleSort}
            paginatedMovies={paginatedMovies}
            sortColumn={sortColumn}
          />

          <Pages
            itemsCount={filteredMovies.length} // 9
            pageSize={pageSize} // 4
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
