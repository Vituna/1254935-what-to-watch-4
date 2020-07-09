import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/reducer.js";

import MoviesList from '../movie-list/movie-list.jsx';
import GenresList from "../genres-list/genres-list.jsx";
import ShowMore from "../show-more/show-more.jsx";

const Main = ({movie, movies, onTitleClick, onCardClick, onGenreItemClick, genres, activeGenre, filmsLength, onShowMoreClick}) => {
  const {title, genre, year} = movie;

  return (
    <>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{year}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList
            onGenreItemClick={onGenreItemClick}
            activeGenre={activeGenre}
            genres={genres}
          />

          <div className="catalog__movies-list">
            <MoviesList
              movies={movies.slice(0, filmsLength)}
              onTitleClick={onTitleClick}
              onCardClick={onCardClick}
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
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

Main.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  movie: PropTypes.shape(),
  onTitleClick: PropTypes.func,
  onCardClick: PropTypes.func,
  activeGenre: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
  onGenreItemClick: PropTypes.func.isRequired,
  filmsLength: PropTypes.number.isRequired,
  onShowMoreClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filmsLength: state.filmsLength,
});

const mapDispatchToProps = (dispatch) => ({
  onShowMoreClick() {
    dispatch(ActionCreator.changeFilmsLength());
  }
});


export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);

