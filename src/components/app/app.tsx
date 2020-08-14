import * as React from "react";
import {Switch, Route, Router, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import PrivateRoute from "../private-route/private-route";

import {getFilmsByGenre} from "../../reducer/state/selectors";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {Operation as UserOperation, AuthorizationStatus} from "../../reducer/user/user";
import {getPromoFilm} from "../../reducer/data/selectors";

import Main from "../main/main";
import MoviePage from "../movie-page/movie-page";
import FullScreenVideoPlayer from "../full-screen-video-player/full-screen-video-player";
import withTabs from "../../hocs/with-tabs/with-tabs";
import withFullScreenVideoPlayer from "../../hocs/with-full-screen-video-player/with-full-screen-video-player";
import SignIn from "../sign-in/sign-in";
import AddReview from "../add-review/add-review";
import MyList from "../my-list/my-list";
import {history} from "../../utils";
import {AppProps, AppDispatchFromStore, AppStateFromStore, AppFromState} from "./types";

const MoviePageWrapped = withTabs(MoviePage);
const FullScreenVideoPlayerWrapped = withFullScreenVideoPlayer(FullScreenVideoPlayer);

const App: React.FC<AppProps> = (props: AppProps) => {
  const {
    movies,
    login,
    authorizationStatus,
    movie,
  } = props;

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
          render = {() => authorizationStatus === AuthorizationStatus.NO_AUTH
            ? <SignIn
              onSubmit={login}
            />
            : <Redirect to={`/`} /> }>
        </Route>
        <PrivateRoute
          exact path="/mylist"
          render={() => {
            return (
              <MyList
              />
            );
          }}
        />
        <Route exact path="/films/:id/review"
          render = {(prop) => authorizationStatus === AuthorizationStatus.AUTH
            ? (
              <AddReview
                {...prop}
              />
            )
            : <Redirect to={`/login`} />}>
        </Route>
        <Route exact path="/films/:id/player"
          render = {(prop) => (
            <FullScreenVideoPlayerWrapped
              {...prop}
              movies={movies}
            />
          )}>
        </Route>
        <Route exact path="/films/:id"
          render = {(prop) => (
            <MoviePageWrapped
              {...prop}
            />
          )}>
        </Route>
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state: AppFromState): AppStateFromStore => ({
  movies: getFilmsByGenre(state),
  movie: getPromoFilm(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch: any): AppDispatchFromStore => ({
  login(authData): void {
    dispatch(UserOperation.login(authData));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);


