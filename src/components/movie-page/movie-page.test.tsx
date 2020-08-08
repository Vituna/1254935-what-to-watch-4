import * as React from "react";
import * as renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import {MoviePage} from "./movie-page";
import {MoviePageProp, FullMoves} from "../../types";

const mockStore = configureStore([]);

export const noop = () => {
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
    isFavoriteFilm: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  }
];

const movie: MoviePageProp =
  {
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    runTime: `1h 39m`,
    year: 2014,
    backgroundPoster: `img/the-grand-budapest-hotel-poster.jpg`,
    filmPoster: `img/bg-the-grand-budapest-hotel.jpg`,
    rating: 8.9,
    ratingCount: 240,
    description: `Gustave prides himself on providing first-className service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`,
  };

const createNodeMock = () => {
  return {};
};

it(`Should MovieCard render correctly`, () => {
  const store = mockStore({
    movies,
    movie
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <MoviePage
            movies={movies}
            movie={movie}
            renderTabs={noop}
            onPlayButtonClick={noop}
            activeTab={``}
          />
        </Provider>, {createNodeMock})
      .toJSON();

  expect(tree).toMatchSnapshot();
});
