import * as React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {getFilmsByGenre} from "../../reducer/state/selectors";
import {getAuthorizationStatus, getFavoritesFilms} from "../../reducer/user/selectors";
import {Operation as UserOperation, AuthorizationStatus} from "../../reducer/user/user";

import MoviesList from "../movie-list/movie-list";
import PageOverview from "../page-overview/page-overview";
import PageDetails from "../page-details/page-details";
import PageReviews from "../page-reviews/page-reviews";
import withMoviesList from "../../hocs/with-movies-list/with-movies-list";
import {MAM_SIMILAR_CARDS, TabType} from "../../consts";
import {getCurentFilm, history} from "../../utils";
import {FullMoves} from "../../types";
import {MoviesPageProps, MoviesPageFromState, MoviesPageFromStore, MoviesPageDispatchFromStore} from "./types";

const MoviesListWrapped = withMoviesList(MoviesList);

const getSimilarCards = (movies: FullMoves[], genre: string): React.ReactNode => {
  return movies.filter((film) => film.genre === genre).slice(0, MAM_SIMILAR_CARDS);
};

const MoviePage: React.FC<MoviesPageProps> = (props: MoviesPageProps) => {
  const {movies, renderTabs, activeTab, authorizationStatus, favoritesFilms, onAddButtonClick} = props;

  const movie = getCurentFilm(movies, props);
  const {
    id,
    title,
    genre,
    runTime,
    year,
    backgroundPoster,
    filmPoster,
    rating,
    ratingCount,
    description,
    director,
    starring,
  } = movie;

  const similarCards = getSimilarCards(movies, genre);

  const isAuthorized = authorizationStatus === AuthorizationStatus.AUTH;

  const isFavorites = !favoritesFilms.find((films) => films.id === id);

  const handleAddButtonClick = (): void => {
    if (!isAuthorized) {
      history.push(`/login`);
    }
    const status = isFavorites ? 1 : 0;
    onAddButtonClick(id, status);
  };

  const onPlayButtonClick = () => {
    return (
      history.push(`/films/${id}/player`)
    );
  };

  const renderActiveTab = (): React.ReactNode => {
    switch (activeTab) {
      case TabType.OVERVIEW:
        return <PageOverview
          rating={rating}
          numberVotes={ratingCount}
          descriptionOne={description}
          descriptionTwo={description}
          director={director}
          starring={starring}
        />;
      case TabType.DETAILS:
        return <PageDetails
          director={director}
          genre={genre}
          runTime={runTime}
          starring={starring}
          year={year}
        />;
      case TabType.REVIEWS:
        return <PageReviews
          movie={movie}
        />;
      default:
        return ``;
    }
  };

  const signIn: React.ReactElement =
        isAuthorized
          ? <Link
            to={`/mylist`}
            className="user-block__avatar"
            style={{
              display: `block`,
            }}>
            <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </Link>
          : <Link
            to={`/login`}
            className="user-block__link"
          >
          Sign in
          </Link>
  ;

  const addReview: React.ReactElement =
    isAuthorized
      ? (
        <Link
          to={`/films/${id}/review`}
          className="btn movie-card__button"
        >
        Add review
        </Link>
      )
      : <Link
        to={`/login`}
        className="btn movie-card__button"
      >
        Add review
      </Link>
    ;

  const myList: React.ReactElement =
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
    </button>
  ;

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={backgroundPoster} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <Link to={`/`} href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <div className="user-block">
              {signIn}
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{year}</span>
              </p>

              <div className="movie-card__buttons">
                <button
                  onClick={() => onPlayButtonClick()}
                  className="btn btn--play movie-card__button"
                  type="button">
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 0L19 9.5L0 19V0Z" fill="#EEE5B5"/>
                  </svg>
                  <span>Play</span>
                </button>
                {myList}
                {addReview}
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={filmPoster} alt={title} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              {renderTabs()}
              {renderActiveTab()}
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div className="catalog__movies-list">
            <MoviesListWrapped
              movies={similarCards}
            />
          </div>
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
    </React.Fragment>
  );
};

const mapStateToProps = (state: MoviesPageFromState): MoviesPageFromStore => ({
  movies: getFilmsByGenre(state),
  authorizationStatus: getAuthorizationStatus(state),
  favoritesFilms: getFavoritesFilms(state),
});

const mapDispatchToProps = (dispatch: any): MoviesPageDispatchFromStore => ({
  onAddButtonClick(id, status): void {
    dispatch(UserOperation.addFilmsToFavorites(id, status));
  },
});

export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
