import * as React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";

import Main from "../main/main";
import MoviePage from "../movie-page/movie-page";
import withTabs from "../../hocs/with-tabs";
import {AppProps, AppState} from "./types";

const MoviePageWrapped = withTabs(MoviePage);

class App extends React.PureComponent<AppProps, AppState> {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null,
    };

    this._handleMovieCardClick = this._handleMovieCardClick.bind(this);
  }

  _handleMovieCardClick(title) {
    this.setState({
      activeCard: title,
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
    const {movies} = this.props;
    const {activeCard} = this.state;

    return (
      <MoviePageWrapped
        movie={movies.find((film) => film.title === activeCard)}
        onTitleClick={this._handleMovieCardClick}
        onCardClick={this._handleMovieCardClick}
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

const mapStateToProps = (state) => ({
  movies: state.movies,
});

export {App};
export default connect(mapStateToProps, {})(App);
