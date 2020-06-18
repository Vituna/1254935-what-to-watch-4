import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import MovieCard from '../movie-card/movie-card.jsx';

class MovieList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null,
    };
  }


  _onHoverCard(movieSetting) {
    this.setState(() => {
      return {
        activeCard: movieSetting
      };
    });
  }

  _getListItems() {
    const {movieСardsSettings, onClick} = this.props;

    return movieСardsSettings.map((it, i) => (
      <MovieCard
        key={i}
        movieSetting={it}
        onClick={onClick}
        onHover={(movie) => this._onHoverCard(movie)}
      />
    ));
  }

  render() {
    return (
      this._getListItems()
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
