import * as React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/reducer";

import Main from "../main/main";
import MoviePage from "../movie-page/movie-page";
import FullScreenVideoPlayer from "../full-screen-video-player/full-screen-video-player";
import withTabs from "../../hocs/with-tabs";
import withFullScreenVideoPlayer from "../../hocs/with-full-screen-video-player/with-full-screen-video-player";
import {AppProps} from "./types";

const MoviePageWrapped = withTabs(MoviePage);
const FullScreenVideoPlayerWrapped = withFullScreenVideoPlayer(FullScreenVideoPlayer);

const App: React.FunctionComponent<AppProps> = (props: AppProps) => {
  const {movies, activeCard, isPlayingMovie, onPlayerExitClick} = props;

  const renderMain = () => {

    return (
      <Main
      />
    );
  };

  const renderMoviePage = () => {

    return (
      <MoviePageWrapped
        movie={movies.find((film) => film.title === activeCard)}
      />
    );
  };

  const renderFullScreenVideoPlayer = () => {
    const [firstMovie] = movies;

    const currentFilm = activeCard === null
      ? firstMovie : movies.find((film) => film.title === activeCard);

    return (
      <FullScreenVideoPlayerWrapped
        preview={currentFilm.previewVideo}
        onPlayerExitClick={onPlayerExitClick}
      />
    );
  };

  const renderApp = () => {
    if (activeCard === null && !isPlayingMovie) {
      return (renderMain());
    }

    if (activeCard && !isPlayingMovie) {
      return (renderMoviePage());
    }

    if (isPlayingMovie) {
      return (renderFullScreenVideoPlayer());
    }

    return null;
  };

  const render = () => {

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {renderApp()}
          </Route>
          <Route exact path="/dev-film">
            {renderMoviePage()}
          </Route>
          <Route exact path="/dev-player">
            {renderFullScreenVideoPlayer()}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  };
  return (render());
};

const mapStateToProps = (state: { movies: string; activeCard: string; isPlayingMovie: boolean }) => ({
  movies: state.movies,
  activeCard: state.activeCard,
  isPlayingMovie: state.isPlayingMovie,
});

const mapDispatchToProps = (dispatch) => ({
  onPlayerExitClick() {
    dispatch(ActionCreator.dropIsPlayingFilm());
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
