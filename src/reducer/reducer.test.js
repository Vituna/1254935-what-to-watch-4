import {reducer, ActionCreator, ActionType, genres, getFilmsByGenre} from "./reducer.js";
import movieСardsSettings from "../mocks/movie-cards-settings.js";
import {movieDetails, movieDetail} from "../mocks/movie-info.js";
import movieReviews from "../mocks/movie-reviews.js";
import {DefaultGenre} from "../consts.js";

const movieTitle = movieDetails.title;
const movieGenre = movieDetails.genre;
const movieReleaseDate = movieDetails.year;

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    movieСardsSettings,
    movieDetails,
    movieTitle,
    movieGenre,
    movieReleaseDate,
    movieDetail,
    movieReviews,
    activeGenre: DefaultGenre,
    genres
  });
});

it(`Reducer should change genre filter`, () => {
  expect(reducer({
    movieСardsSettings,
    movieDetails,
    movieTitle,
    movieGenre,
    movieReleaseDate,
    movieDetail,
    movieReviews,
    activeGenre: `Documentary`,
    genres
  }, {
    type: ActionType.CHANGE_GENRE_FILTER,
    payload: `Dramas`,
  })).toEqual({
    movieСardsSettings,
    movieDetails,
    movieTitle,
    movieGenre,
    movieReleaseDate,
    movieDetail,
    movieReviews,
    activeGenre: `Dramas`,
    genres
  });

  expect(reducer({
    movieСardsSettings,
    movieDetails,
    movieTitle,
    movieGenre,
    movieReleaseDate,
    movieDetail,
    movieReviews,
    activeGenre: `Dramas`,
    genres
  }, {
    type: ActionType.CHANGE_GENRE_FILTER,
    payload: `Kids & Family`,
  })).toEqual({
    movieСardsSettings,
    movieDetails,
    movieTitle,
    movieGenre,
    movieReleaseDate,
    movieDetail,
    movieReviews,
    activeGenre: `Kids & Family`,
    genres
  });
});

it(`Reducer should return filtered films`, () => {
  expect(reducer({
    movieСardsSettings,
    movieDetails,
    movieTitle,
    movieGenre,
    movieReleaseDate,
    movieDetail,
    movieReviews,
    activeGenre: DefaultGenre,
    genres
  }, {
    type: ActionType.GET_FILMS_BY_GENRE,
    payload: getFilmsByGenre(movieСardsSettings, `Romance`),
  })).toEqual({
    movieСardsSettings: getFilmsByGenre(movieСardsSettings, `Romance`),
    movieDetails,
    movieTitle,
    movieGenre,
    movieReleaseDate,
    movieDetail,
    movieReviews,
    activeGenre: DefaultGenre,
    genres
  });

  expect(reducer({
    movieСardsSettings: getFilmsByGenre(movieСardsSettings, `Romance`),
    movieDetails,
    movieTitle,
    movieGenre,
    movieReleaseDate,
    movieDetail,
    movieReviews,
    activeGenre: `Dramas`,
    genres
  }, {
    type: ActionType.GET_FILMS_BY_GENRE,
    payload: movieСardsSettings,
  })).toEqual({
    movieСardsSettings,
    movieDetails,
    movieTitle,
    movieGenre,
    movieReleaseDate,
    movieDetail,
    movieReviews,
    activeGenre: `Dramas`,
    genres
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for changeFilter`, () => {
    expect(ActionCreator.changeFilter(`Documentary`)).toEqual({
      type: ActionType.CHANGE_GENRE_FILTER,
      payload: `Documentary`,
    });
  });

  // it(`Action creator for getFilmsByGenre returns films filtered by genre`, () => {
  //   expect(ActionCreator.getFilmsByGenre(`Crime`)).toEqual({
  //     type: ActionType.GET_FILMS_BY_GENRE,
  //     payload: [{
  //       genre: `Crime`,
  //       name: `Bohemian Rhapsody`,
  //       image: `img/bohemian-rhapsody.jpg`,
  //       previewVideo: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  //     },
  //     {
  //       genre: `Crime`,
  //       name: `Snatch`,
  //       image: `img/snatch.jpg`,
  //       previewVideo: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  //     }],
  //   });
  // });

  it(`Action creator for getFilmsByGenre returns films filtered by default genre`, () => {
    expect(ActionCreator.getFilmsByGenre(DefaultGenre)).toEqual({
      type: ActionType.GET_FILMS_BY_GENRE,
      payload: movieСardsSettings,
    });
  });
});

