import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import MovieCard from '../movie-card/movie-card.jsx';

class MovieList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null,
    };
    this._onCardMouseEnter = this._onCardMouseEnter.bind(this);
    this._onCardMouseLeave = this._onCardMouseLeave.bind(this);
  }

  _onCardMouseEnter(movieSetting) {
    this.setState({
      activeCard: movieSetting,
    });
  }

  _onCardMouseLeave() {
    this.setState({
      activeCard: null,
    });
  }

  _getMovie(it, i) {
    return (
      <MovieCard
        key={`${i}`}
        movieSetting={it}
        onTitleClick={this.props.onTitleClick}
        onCardClick={this.props.onCardClick}
        onCardMouseEnter={this._onCardMouseEnter}
        onCardMouseLeave={this._onCardMouseLeave}
      />
    );
  }

  _renderMovies() {
    const {movies} = this.props;
    return movies.map(this._getMovie, this);
  }

  render() {
    return (
      this._renderMovies()
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onTitleClick: PropTypes.func,
  onCardClick: PropTypes.func,
};

export default MovieList;
