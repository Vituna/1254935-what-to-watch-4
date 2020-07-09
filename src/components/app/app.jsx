import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/reducer.js";

import Main from "../main/main.jsx";
import MoviePage from '../movie-page/movie-page.jsx';
import withTabs from '../../hocs/with-tabs.jsx';

const MoviePageWrapped = withTabs(MoviePage);

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null,
    };

    this._handleMovieCardClick = this._handleMovieCardClick.bind(this);
  }

  _handleMovieCardClick(movieSetting) {
    this.setState({
      activeCard: movieSetting,
    });
  }

  _renderMain() {
    const {movies, onGenreItemClick, genres, activeGenre} = this.props;
    const movie = movies[0];

    return (
      <Main
        movie={movie}
        movies={movies}
        onTitleClick={this._handleMovieCardClick}
        onCardClick={this._handleMovieCardClick}
        genres={genres}
        activeGenre={activeGenre}
        onGenreItemClick={onGenreItemClick}
      />
    );
  }

  _renderMoviePage() {
    const {movies} = this.props;
    const movie = movies[0];

    return (
      <MoviePageWrapped
        movies={movies}
        movie={movie}
        onTitleClick={this._handleCardTitleClick}
        onCardClick={this._handleCardTitleClick}
      />
    );
  }

  _renderApp() {
    const {activeCard} = this.state;

    const isActiveCard = activeCard ? this._renderMoviePage() : this._renderMain();
    return isActiveCard;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-film">
            {this._renderMoviePage()}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  movies: PropTypes.array.isRequired,
  activeGenre: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
  onGenreItemClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeGenre: state.activeGenre,
  movies: state.movies,
  genres: state.genres,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreItemClick(genre) {
    dispatch(ActionCreator.getFilmsByGenre(genre));
    dispatch(ActionCreator.changeFilter(genre));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
