import * as React from "react";
import * as renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

import NameSpace from "../../reducer/name-space";
import {App} from "./app";
import {FullMoves, FilmMain} from "../../types";

const mockStore = configureStore([]);

const movies: FullMoves[] = [
  {
    id: 3,
    title: `The Grand Budapest Hotel`,
    filmPoster: `img/bg-the-grand-budapest-hotel.jpg`,
    image: `img/the-grand-budapest-hotel-poster.jpg`,
    backgroundPoster: `img/the-grand-budapest-hotel-poster.jpg`,
    backgroundColor: `img/bg-the-grand-budapest-hotel.jpg`,
    src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.`,
    rating: 8.9,
    ratingCount: 240,
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`,
    runTime: `1h 39m`,
    genre: `Drama`,
    year: 2014,
  }
];

const movie: FilmMain = {
  id: 2,
  title: `The Grand Budapest Hotel`,
  filmPoster: `img/bg-the-grand-budapest-hotel.jpg`,
  backgroundPoster: `img/the-grand-budapest-hotel-poster.jpg`,
  genre: `Drama`,
  year: 2014,
  isFavorites: true,
};


const createNodeMock = () => {
  return {};
};

const noop = () => {
  return;
};

it(`Render App`, () => {

  const store = mockStore({
    [NameSpace.DATA]: {
      movies,
    },
    [NameSpace.USER]: {
      authorizationStatus: `NO_AUTH`,
      favoritesFilms: [],
    },
    [NameSpace.STATE]: {
      genre: movie,
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            movies={movies}
            movie={movie}
            authorizationStatus={`NO_AUTH`}
            login={noop}
            isLoadingFilms={false}
            isLoadingPromoFilm={false}
          />
        </Provider>, {createNodeMock})
  .toJSON();

  expect(tree).toMatchSnapshot();
});
