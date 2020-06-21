import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import MovieCard from '../movie-card/movie-card.jsx';

class MovieList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null,
    };

    this._handleCardHover = this._handleCardHover.bind(this);
    this._handleTitleClick = this._handleTitleClick.bind(this);
  }

  _handleCardHover(movieSetting) {
    this.setState({
      activeCard: movieSetting
    });
  }

  _handleTitleClick(onClick, movieSetting) {
    return (evt) => {
      evt.preventDefault();
      onClick(movieSetting);
    };
  }

  _getMovie(it, i) {
    return (
      <MovieCard
        key={i}
        movieSetting={it}
        onClick={this._handleTitleClick}
        onHover={this._handleCardHover}
      />
    );
  }

  _renderMovies() {
    const {movieСardsSettings} = this.props;
    return movieСardsSettings.map((it, i) => this._getMovie(it, i)
    );
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
  onClick: PropTypes.func,
  onHover: PropTypes.func,
};

export default MovieList;
