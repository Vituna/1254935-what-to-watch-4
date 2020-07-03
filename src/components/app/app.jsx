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
    const {movieTitle, movieGenre, movieReleaseDate, movieСardsSettings, onGenreItemClick, genres, activeGenre} = this.props;
    return (
      <Main
        movieTitle={movieTitle}
        movieGenre={movieGenre}
        movieReleaseDate={movieReleaseDate}
        movieСardsSettings={movieСardsSettings}
        onTitleClick={this._handleMovieCardClick}
        onCardClick={this._handleMovieCardClick}
        genres={genres}
        activeGenre={activeGenre}
        onGenreItemClick={onGenreItemClick}
      />
    );
  }

  _renderMoviePage() {
    const {movieСardsSettings, movieDetails, movieReviews, movieDetail} = this.props;

    return (
      <MoviePageWrapped
        movieСardsSettings={movieСardsSettings}
        movieDetails={movieDetails}
        movieDetail={movieDetail}
        movieReviews={movieReviews}
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
  movieСardsSettings: PropTypes.arrayOf(PropTypes.shape({
    genre: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    previewVideo: PropTypes.string,
  })),
  movieDetails: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    bigPoster: PropTypes.string.isRequired,
    filmCover: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    numberVotes: PropTypes.number.isRequired,
    descriptionOne: PropTypes.string.isRequired,
    descriptionTwo: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.string.isRequired,
    movieDurationTime: PropTypes.string.isRequired,
  }),
  movieReviews: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  })),
  movieDetail: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.number,
  })),
  activeGenre: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
  onGenreItemClick: PropTypes.func.isRequired,
  movieTitle: PropTypes.string,
  movieGenre: PropTypes.string,
  movieReleaseDate: PropTypes.number,
};

const mapStateToProps = (state) => ({
  activeGenre: state.activeGenre,
  movieСardsSettings: state.movieСardsSettings,
  movieTitle: state.movieTitle,
  movieGenre: state.movieGenre,
  movieReleaseDate: state.movieReleaseDate,
  movieDetails: state.movieDetails,
  movieDetail: state.movieDetail,
  movieReviews: state.movieReviews,
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
