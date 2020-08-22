import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api";
import {reducer, ActionType, Operation} from "./data";
import {filmAdapter} from "../../adapter/adapter";

const api = createAPI(() => {});

const notAdaptedFilms = [
  {
    name: `Beach`,
    description: `Vicenarian Richard travels to Thailand and finds himself in possession of a strange map. Rumours state that it leads to a solitary beach paradise, a tropical bliss. Excited and intrigued, he sets out to find it.`,
    rating: 3.3,
    director: `Danny Boyle`,
    starring: [`Leonardo DiCaprio`, `Daniel York`, `Patcharawan Patarakijjanon`],
    genre: `Adventure`,
    released: 2000,
    id: 1,
  }
];

const movies = [
  {
    backgroundColor: `#BDAD8F`,
    cover: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/No_Country_for_Old_Men.jpg`,
    description: `Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.`,
    director: `Ethan Coen`,
    genre: `Crime`,
    id: 1,
    isFavorite: false,
    poster: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/No_Country_for_Old_Men.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    previewImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/no-country-for-old-men.jpg`,
    ratingCount: 764976,
    ratingScore: 4.1,
    runTime: 122,
    starring: [`Tommy Lee Jones`, `Javier Bardem`, `Josh Brolin`],
    title: `No Country for Old Men`,
    videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
    year: 2007,
  },
];


it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    movies: [],
    promoFilm: {},
    isLoadingFilms: true,
    isLoadingPromoFilm: true,
  });
});

it(`Reducer should update films by load films`, () => {
  expect(reducer({
    movies: null,
  }, {
    type: ActionType.LOAD_FILMS,
    payload: movies,
  })).toEqual({
    movies,
  });
});

it(`Reducer should update promoFilm by load promoFilm`, () => {
  expect(reducer({
    promoFilm: null,
  }, {
    type: ActionType.LOAD_PROMO_FILM,
    payload: movies[0],
  })).toEqual({
    promoFilm: movies[0],
  });
});


describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /films`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = Operation.loadFilms();

    apiMock
      .onGet(`/films`)
      .reply(200, notAdaptedFilms);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILMS,
          payload: [filmAdapter(notAdaptedFilms[0])],
        });
      });
  });

  it(`Should make a correct API call to /films/promo`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const promoFilmLoader = Operation.loadPromoFilm();

    apiMock
      .onGet(`/films/promo`)
      .reply(200, notAdaptedFilms[0]);

    return promoFilmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO_FILM,
          payload: filmAdapter(notAdaptedFilms[0]),
        });
      });
  });
});
