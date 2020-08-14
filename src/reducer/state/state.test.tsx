import {reducer, ActionType} from "./state";

const GENRE_DEFAULT = `All genres`;
const FILMS_LENGTH = 8;

const filmsWatch = `Aviator, The Revenant`;

it(`Reducer should change the genre to a given value`, () => {
  expect(reducer({
    genre: GENRE_DEFAULT,
    activeCard: null,
    filmsLength: FILMS_LENGTH,
    isPlayingMovie: false,
  }, {
    type: ActionType.CHANGE_FILTER_BY_GENRE,
    payload: `Drama`,
  })).toEqual({
    genre: `Drama`,
    activeCard: null,
    filmsLength: FILMS_LENGTH,
    isPlayingMovie: false,
  });
});

it(`Reducer should change the movie to a given value`, () => {
  expect(reducer({
    genre: GENRE_DEFAULT,
    activeCard: null,
    filmsLength: FILMS_LENGTH,
    isPlayingMovie: false,
  }, {
    type: ActionType.SET_ACTIVE_FILM,
    payload: `The Grand Budapest Hotel`,
  })).toEqual({
    genre: GENRE_DEFAULT,
    activeCard: `The Grand Budapest Hotel`,
    filmsLength: FILMS_LENGTH,
    isPlayingMovie: false,
  });
});

it(`Reducer should change the length of the movie list to a given value`, () => {
  expect(reducer({
    genre: GENRE_DEFAULT,
    activeCard: null,
    filmsLength: FILMS_LENGTH,
    isPlayingMovie: false,

  }, {
    type: ActionType.SET_FILMS_LENGTH,
    payload: FILMS_LENGTH,
  })).toEqual({
    genre: GENRE_DEFAULT,
    activeCard: null,
    filmsLength: 16,
    isPlayingMovie: false,

  });
});

it(`Reducer should change the length of the movie list to a initial value`, () => {
  expect(reducer({
    genre: GENRE_DEFAULT,
    activeCard: null,
    filmsLength: 16,
    isPlayingMovie: false,

  }, {
    type: ActionType.SET_FILMS_LENGTH,
    payload: FILMS_LENGTH,
  })).toEqual({
    genre: GENRE_DEFAULT,
    activeCard: null,
    filmsLength: 24,
    isPlayingMovie: false,

  });
});

it(`Reducer should change  the playback to a false`, () => {
  expect(reducer({
    genre: GENRE_DEFAULT,
    activeCard: null,
    filmsLength: FILMS_LENGTH,
    isPlayingMovie: true,

  }, {
    type: ActionType.IS_PLAYING_FILM,
    payload: false,
  })).toEqual({
    genre: GENRE_DEFAULT,
    activeCard: null,
    filmsLength: FILMS_LENGTH,
    isPlayingMovie: false,

  });
});

it(`Reducer should change  the playback to a true`, () => {
  expect(reducer({
    genre: GENRE_DEFAULT,
    activeCard: null,
    filmsLength: FILMS_LENGTH,
    isPlayingMovie: false,

  }, {
    type: ActionType.ACTIVATE_PLAYING_FILM,
    payload: true,
  })).toEqual({
    genre: GENRE_DEFAULT,
    activeCard: null,
    filmsLength: FILMS_LENGTH,
    isPlayingMovie: true,

  });
});

it(`Reducer should change the list of movies to be watched by a given value`, () => {
  expect(reducer({
    currentGenre: GENRE_DEFAULT,
    activeFilm: null,
    filmsLength: FILMS_LENGTH,
    isPlayingFilm: false,
    filmsAddedToWatch: null,
  }, {
    type: ActionType.SET_FILMS_ADDED_TO_WATCH,
    payload: filmsWatch,
  })).toEqual({
    currentGenre: GENRE_DEFAULT,
    activeFilm: null,
    filmsLength: FILMS_LENGTH,
    isPlayingFilm: false,
    filmsAddedToWatch: filmsWatch,
  });
});
