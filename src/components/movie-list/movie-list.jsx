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
    this._onTitleClick = this._onTitleClick.bind(this);
  }

  _onCardMouseEnter(movieSetting) {
    this.setState({
      activeCard: movieSetting,
    });
  }

  _onTitleClick(movieSetting) {
    this.setState({
      activeCard: movieSetting,
    });
  }

  _getMovie(it, i) {

    return (
      <MovieCard
        key={`${i}`}
        movieSetting={it}
        onTitleClick={this._onTitleClick}
        onCardMouseEnter={this._onCardMouseEnter}
      />
    );
  }

  _renderMovies() {
    const {movieСardsSettings} = this.props;

    return movieСardsSettings.map(this._getMovie, this);
  }

  render() {
    return (
      this._renderMovies()
    );
  }
}

MovieList.propTypes = {
  movieСardsSettings: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })),
};

export default MovieList;
