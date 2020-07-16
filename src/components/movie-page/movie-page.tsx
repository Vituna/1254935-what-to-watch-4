import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import MoviesList from '../movie-list/movie-list';
import PageOverview from '../page-overview/page-overview';
import PageDetails from '../page-details/page-details';
import PageReviews from '../page-reviews/page-reviews';
import withMoviesList from '../../hocs/with-movies-list';
import {MaxSimilarCards} from '../../consts';

const MoviesListWrapped = withMoviesList(MoviesList);

const getSimilarCards = (movies, genre) => {
  return movies.filter((movie) => movie.genre === genre).slice(0, MaxSimilarCards);
};

const MoviePage = ({movies, movie, onTitleClick, onCardClick, renderTabs, activeTab}) => {

  const {
    title,
    genre,
    year,
    bigPoster,
    filmCover,
    rating,
    numberVotes,
    descriptionOne,
    descriptionTwo,
    director,
    starring,
  } = movie;

  const similarCards = getSimilarCards(movies, genre);

  const renderActiveTab = () => {
    switch (activeTab) {
      case `Overview`:
        return <PageOverview
          rating={rating}
          numberVotes={numberVotes}
          descriptionOne={descriptionOne}
          descriptionTwo={descriptionTwo}
          director={director}
          starring={starring}
        />;
      case `Details`:
        return <PageDetails
        />;
      case `Reviews`:
        return <PageReviews
          movie={movie}
        />;
      default:
        return ``;
    }
  };

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={bigPoster} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <a href="main.html" className="logo__link">
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
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={filmCover} alt={title} width="218" height="327" />
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
              onTitleClick={onTitleClick}
              onCardClick={onCardClick}
            />
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
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

MoviePage.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  movie: PropTypes.shape(),
  onTitleClick: PropTypes.func,
  onCardClick: PropTypes.func,
  renderTabs: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.movies,
});

export {MoviePage};
export default connect(mapStateToProps, {})(MoviePage);