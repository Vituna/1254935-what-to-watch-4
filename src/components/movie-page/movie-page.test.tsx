import * as React from "react";
import * as renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from "react-router-dom";

import NameSpace from "../../reducer/name-space";
import {MoviePage} from "./movie-page";
import {history} from "../../utils";
import {MoviePageProp, FullMoves} from "../../types";

const mockStore = configureStore([]);

const noop = () => {
  return;
};

const movies: FullMoves[] = [
  {
    id: 1,
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

const createNodeMock = () => {
  return {};
};

const match: {
  params: {
      id: number;
  };
} = {
  params: {
    id: 1,
  }
};

const props = {
  match,
};

it(`Should MovieCard render correctly`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      movies
    },
    [NameSpace.USER]: {
      authorizationStatus: `NO_AUTH`,
      favoritesFilms: [],
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Router
            history={history}
          >
            <MoviePage
              {...props}
              movies={movies}
              renderTabs={noop}
              activeTab={``}
              authorizationStatus={`NO_AUTH`}
              favoritesFilms={[]}
              onAddButtonClick={noop}
            />
          </Router>
        </Provider>, {createNodeMock})
      .toJSON();

  expect(tree).toMatchSnapshot();
});
