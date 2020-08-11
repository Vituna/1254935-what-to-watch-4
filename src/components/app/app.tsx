import * as React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";

import {ActionCreator} from "../../reducer/state/state";
import {getState, getActive, getSelectedMovie} from "../../reducer/state/selectors";
import {getPromoFilm} from "../../reducer/data/selectors";
import {getAuthorizationStatus, getShowSendError} from "../../reducer/user/selectors";
import {Operation as UserOperation, AuthorizationStatus} from "../../reducer/user/user";

import Main from "../main/main";
import MoviePage from "../movie-page/movie-page";
import FullScreenVideoPlayer from "../full-screen-video-player/full-screen-video-player";
import withTabs from "../../hocs/with-tabs/with-tabs";
import withFullScreenVideoPlayer from "../../hocs/with-full-screen-video-player/with-full-screen-video-player";
import SignIn from "../sign-in/sign-in";
import AddReview from "../add-review/add-review";
import {AppProps, AppDispatchFromStore, AppStateFromStore, AppFromState} from "./types";

const MoviePageWrapped = withTabs(MoviePage);
const FullScreenVideoPlayerWrapped = withFullScreenVideoPlayer(FullScreenVideoPlayer);

const App: React.FC<AppProps> = (props: AppProps) => {
  const {movies, active, activeCard, isPlayingMovie, onPlayerExitClick, login, authorizationStatus, sendReview, showSendError} = props;

  const renderMain = (): React.ReactNode => {

    return (
      <Main
      />
    );
  };

  const renderMoviePage = (): React.ReactNode => {

    return (
      <MoviePageWrapped
        movie={activeCard}
      />
    );
  };

  const renderFullScreenVideoPlayer = (): React.ReactNode => {
    const {backgroundPoster, src} = movies;

    return (
      <FullScreenVideoPlayerWrapped
        poster={backgroundPoster}
        videoLink={src}
        onPlayerExitClick={onPlayerExitClick}
      />
    );
  };

  const renderSingIn = (): React.ReactNode => {

    return (
      <SignIn
        onSubmit={login}
      />
    );
  };

  const renderAddReview = () => {

    const {title, backgroundPoster, filmPoster} = movies;

    return (
      <AddReview
        title={title}
        backgroundPoster={backgroundPoster}
        filmPoster={filmPoster}
        onSubmitReview={sendReview}
        showSendError={showSendError}
      />
    );
  };

  const renderApp = (): React.ReactNode => {
    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      return (renderSingIn());
    }

    if (active === null && !isPlayingMovie) {
      return (renderMain());
    }

    if (active && !isPlayingMovie) {
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
          <Route exact path="/dev-form">
            {renderAddReview()}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  };
  return (render());
};

const mapStateToProps = (state: AppFromState): AppStateFromStore => ({
  activeCard: getSelectedMovie(state),
  active: getActive(state),
  isPlayingMovie: getState(state),
  movies: getPromoFilm(state),
  authorizationStatus: getAuthorizationStatus(state),
  showSendError: getShowSendError(state),
});

const mapDispatchToProps = (dispatch: any): AppDispatchFromStore => ({
  onPlayerExitClick(): void {
    dispatch(ActionCreator.dropIsPlayingFilm());
  },

  login(authData): void {
    dispatch(UserOperation.login(authData));
  },

  sendReview(reviewData) {
    dispatch(UserOperation.sendReview(reviewData));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);


