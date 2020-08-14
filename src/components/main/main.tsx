import * as React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {ActionCreator} from "../../reducer/state/state";
import {Operation as UserOperation} from "../../reducer/user/user";
import {getShownMovies, getFilmsByGenre, getState} from "../../reducer/state/selectors";
import {getAuthorizationStatus, getFavoritesFilms} from "../../reducer/user/selectors";
import {AuthorizationStatus} from "../../reducer/user/user";

import MoviesList from "../movie-list/movie-list";
import GenresList from "../genres-list/genres-list";
import ShowMore from "../show-more/show-more";
import withMoviesList from "../../hocs/with-movies-list";
import {history} from "../../utils";
import {MainProps, MainFromStore, MainDispatchFromStore, MainFromState} from "./types";

const MoviesListWrapped = withMoviesList(MoviesList);

const Main: React.FC<MainProps> = (props: MainProps) => {
  const {movies, movie, filmsLength, onShowMoreClick, favoritesFilms, onAddButtonClick, authorizationStatus} = props;

  const {
    id,
    title,
    genre,
    year,
    backgroundPoster,
    filmPoster,
  } = movie;

  const isAuthorized = authorizationStatus === AuthorizationStatus.AUTH;

  const isFavorites = !favoritesFilms.find((film) => film.id === id);

  const handleAddButtonClick = (): void => {
    if (!isAuthorized) {
      history.push(`/login`);
    }
    const status = isFavorites ? 1 : 0;
    onAddButtonClick(id, status);
  };

  const insertsAuthorized: React.ReactElement =
      isAuthorized
        ? <Link to={`/mylist`}>
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </Link>
        : <Link to={`/login`} className="user-block__link">
          Sign in
        </Link>;

  const insertsMyList: React.ReactElement =
    <button onClick={handleAddButtonClick} className="btn btn--list movie-card__button" type="button">
      {isFavorites
        ? (<svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>)
        : (<svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg>)
      }
      <span>My list</span>
    </button>;

  return (
    <>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img
            src={backgroundPoster}
            alt={title}
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <Link to={`/`} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="user-block">
            {insertsAuthorized}
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img
                src={filmPoster}
                alt={title + ` poster`}
                width="218" height="327"
              />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{year}</span>
              </p>

              <div className="movie-card__buttons">
                <button
                  onClick={() => {
                    history.push(`/films/${id}/player`);
                  }}
                  className="btn btn--play movie-card__button"
                  type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                {insertsMyList}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList/>
          <div className="catalog__movies-list">
            <MoviesListWrapped
              movies={movies.slice(0, filmsLength)}
            />
          </div>

          {filmsLength < movies.length
            ? <ShowMore
              onShowMoreClick={onShowMoreClick}
            />
            : null}

        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link to={`/`} className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

const mapStateToProps = (state: MainFromState): MainFromStore => ({
  movies: getFilmsByGenre(state),
  filmsLength: getShownMovies(state),
  authorizationStatus: getAuthorizationStatus(state),
  isPlayingMovie: getState(state),
  favoritesFilms: getFavoritesFilms(state),
});

const mapDispatchToProps = (dispatch: any): MainDispatchFromStore => ({
  onShowMoreClick(): void {
    dispatch(ActionCreator.changeFilmsLength());
  },

  onAddButtonClick(id, status): void {
    dispatch(UserOperation.addFilmsToFavorites(id, status));
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
