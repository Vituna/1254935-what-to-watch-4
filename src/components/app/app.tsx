import * as React from "react";
import {Switch, Route, Router, Redirect, RouteChildrenProps} from "react-router-dom";
import {connect} from "react-redux";
import PrivateRoute from "../private-route/private-route";

import {getFilmsByGenre} from "../../reducer/state/selectors";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {Operation as UserOperation, AuthorizationStatus} from "../../reducer/user/user";
import {getLoadingFilmsState, getLoadingPromoFilmState, getPromoFilm} from '../../reducer/data/selectors';

import Main from "../main/main";
import MoviePage from "../movie-page/movie-page";
import FullScreenVideoPlayer from "../full-screen-video-player/full-screen-video-player";
import withTabs from "../../hocs/with-tabs/with-tabs";
import withFullScreenVideoPlayer from "../../hocs/with-full-screen-video-player/with-full-screen-video-player";
import SignIn from "../sign-in/sign-in";
import AddReview from "../add-review/add-review";
import MyList from "../my-list/my-list";
import {history} from "../../utils";
import Preloader from "../preloader/preloader";

import {AppProps, AppDispatchFromStore, AppStateFromStore, AppFromState} from "./types";

const MoviePageWrapped = withTabs(MoviePage);
const FullScreenVideoPlayerWrapped = withFullScreenVideoPlayer(FullScreenVideoPlayer);

const App: React.FC<AppProps> = (props: AppProps) => {
  const {
    movies,
    login,
    authorizationStatus,
    movie,
    isLoadingFilms,
    isLoadingPromoFilm
  } = props;

  if (isLoadingFilms || isLoadingPromoFilm) {
    return <Preloader />;
  }

  const renderSignIn = () => {
    return (
      authorizationStatus === AuthorizationStatus.NO_AUTH
        ? <SignIn
          onSubmit={login}
        />
        : <Redirect to={`/`} />
    );
  };

  const renderAddReview = (prop: RouteChildrenProps) => {
    return (
      authorizationStatus === AuthorizationStatus.AUTH
        ? (
          <AddReview
            {...prop}
          />
        )
        : <Redirect to={`/login`} />
    );
  };

  const renderFullScreenVideoPlayerWrapped = (prop: RouteChildrenProps) => {
    return (
      <FullScreenVideoPlayerWrapped
        {...prop}
        movies={movies}
      />
    );
  };

  const renderMoviePageWrapped = (prop: RouteChildrenProps) => {
    return (
      <MoviePageWrapped
        {...prop}
      />
    );
  };

  return (
    <Router
      history={history}
    >
      <Switch>
        <Route exact path="/">
          <Main
            movie={movie}
          />
        </Route>
        <Route exact path="/login"
          render = {() => renderSignIn()}>
        </Route>
        <PrivateRoute
          exact path="/mylist"
          render = {() => <MyList/>}
        />
        <Route exact path="/films/:id/review"
          render = {(prop) => renderAddReview(prop)}>
        </Route>
        <Route exact path="/films/:id/player"
          render = {(prop) => renderFullScreenVideoPlayerWrapped(prop)}>
        </Route>
        <Route exact path="/films/:id"
          render = {(prop) => renderMoviePageWrapped(prop)}>
        </Route>
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state: AppFromState): AppStateFromStore => ({
  movies: getFilmsByGenre(state),
  movie: getPromoFilm(state),
  authorizationStatus: getAuthorizationStatus(state),
  isLoadingFilms: getLoadingFilmsState(state),
  isLoadingPromoFilm: getLoadingPromoFilmState(state)
});

const mapDispatchToProps = (dispatch: any): AppDispatchFromStore => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
