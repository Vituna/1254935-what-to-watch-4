import React, {PureComponent} from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom";

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

    return (
      <Main
        onTitleClick={this._handleMovieCardClick}
        onCardClick={this._handleMovieCardClick}
      />
    );
  }

  _renderMoviePage() {

    return (
      <MoviePageWrapped
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

export default App;
