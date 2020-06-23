import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import Main from "../main/main.jsx";
import MoviePage from '../movie-page/movie-page.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null,
    };

    this._handleCardTitleClick = this._handleCardTitleClick.bind(this);
  }

  _handleCardTitleClick(movieSetting) {
    this.setState({
      activeCard: movieSetting,
    });
  }

  _renderMain() {
    const {movieTitle, movieGenre, movieReleaseDate, movieСardsSettings} = this.props;
    return (
      <Main
        movieTitle={movieTitle}
        movieGenre={movieGenre}
        movieReleaseDate={movieReleaseDate}
        movieСardsSettings={movieСardsSettings}
        onTitleClick={this._handleCardTitleClick}
        onCardClick={this._handleCardTitleClick}
      />
    );
  }

  _renderMoviePage() {
    const {movieСardsSettings, movieDetails} = this.props;

    return (
      <MoviePage
        movieСardsSettings={movieСardsSettings}
        movieDetails = {movieDetails}
        onTitleClick={this._handleCardTitleClick}
        onCardClick={this._handleCardTitleClick}
      />
    );
  }

  _renderApp() {
    const {activeCard} = this.state;

    if (activeCard) {
      return this._renderMoviePage();
    }
    return this._renderMain();
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
  movieTitle: PropTypes.string.isRequired,
  movieGenre: PropTypes.string.isRequired,
  movieReleaseDate: PropTypes.number.isRequired,
  movieСardsSettings: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string
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
  }),
};

export default App;
