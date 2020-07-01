import React from 'react';
import PropTypes from 'prop-types';

import MoviesList from '../movie-list/movie-list.jsx';
import PageOverview from '../page-overview/page-overview.jsx';
import PageDetails from '../page-details/page-details.jsx';
import PageReviews from '../page-reviews/page-reviews.jsx';
import {MaxSimilarCards} from '../../consts.js';


const getSimilarCards = (movieСardsSettings, genre) => {
  return movieСardsSettings.filter((movie) => movie.genre === genre).slice(0, MaxSimilarCards);
};

const MoviePage = ({movieСardsSettings, onTitleClick, onCardClick, movieDetails, movieReviews, renderTabs, activeTab, movieDetail}) => {
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
  } = movieDetails;

  const similarCards = getSimilarCards(movieСardsSettings, genre);

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
          movieDetail={movieDetail}
        />;
      case `Reviews`:
        return <PageReviews
          movieReviews={movieReviews}
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
            <MoviesList
              movieСardsSettings={similarCards}
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
  movieСardsSettings: PropTypes.arrayOf(PropTypes.shape({
    genre: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string
  })),
  onTitleClick: PropTypes.func,
  onCardClick: PropTypes.func,
  movieDetails: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    bigPoster: PropTypes.string.isRequired,
    filmCover: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    numberVotes: PropTypes.number.isRequired,
    descriptionOne: PropTypes.string.isRequired,
    descriptionTwo: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.string.isRequired,
    movieDurationTime: PropTypes.string.isRequired,
  }),
  movieReviews: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  })),
  renderTabs: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
  movieDetail: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.number,
  })),
};

export default MoviePage;
