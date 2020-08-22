import {reducer, ActionType} from "./state";

const GENRE_DEFAULT = `All genres`;
const FILMS_LENGTH = 8;

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
