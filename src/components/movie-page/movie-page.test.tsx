import * as React from "react";
import * as renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import {MoviePage} from "./movie-page";
import {FullMove, FullMoves} from "../../types";

const mockStore = configureStore([]);

export const noop = () => {
  return;
};

const movies: FullMoves[] = [
  {
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    year: 2014,
    movieDurationTime: `1h 39m`,
    filmCover: `img/the-grand-budapest-hotel-poster.jpg`,
    bigPoster: `img/bg-the-grand-budapest-hotel.jpg`,
    rating: 8.9,
    numberVotes: 240,
    descriptionOne: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.`,
    descriptionTwo: `Gustave prides himself on providing first-className service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    comments: {
      text: `I didn&apos;t find it amusing, and while I can appreciate the creativity, it&apos;s an hour and 40 minutes I wish I could take back.`,
      author: `Amanda Greever`,
      date: `2015-11-18`,
      rating: `8,0`,
    }
  },
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    filmCover: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Sci-Fi`,
    year: 2014,
    movieDurationTime: `1h 39m`,
    bigPoster: `img/bg-the-grand-budapest-hotel.jpg`,
    rating: 8.9,
    numberVotes: 240,
    descriptionOne: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.`,
    descriptionTwo: `Gustave prides himself on providing first-className service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`,
    previewVideo: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    comments: {
      text: `I didn&apos;t find it amusing, and while I can appreciate the creativity, it&apos;s an hour and 40 minutes I wish I could take back.`,
      author: `Amanda Greever`,
      date: `2015-11-18`,
      rating: `8,0`,
    }
  },
];

const movie: FullMove =
  {
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    year: 2014,
    movieDurationTime: `1h 39m`,
    filmCover: `img/the-grand-budapest-hotel-poster.jpg`,
    bigPoster: `img/bg-the-grand-budapest-hotel.jpg`,
    rating: 8.9,
    numberVotes: 240,
    descriptionOne: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.`,
    descriptionTwo: `Gustave prides himself on providing first-className service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    comments: [{
      text: `I didn&apos;t find it amusing, and while I can appreciate the creativity, it&apos;s an hour and 40 minutes I wish I could take back.`,
      author: `Amanda Greever`,
      date: `2015-11-18`,
      rating: `8,0`,
    }]
  };

interface FilmsLength {
  filmsLength: number;
}

const filmsLength = 2;

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
          filmsLength={filmsLength}
          onCardMouseLeave={noop}
          onShowMoreClick={noop}
          renderTabs={noop}
          onPlayButtonClick={noop}
          activeTab={``}
        />
      </Provider>, {createNodeMock})
      .toJSON();

  expect(tree).toMatchSnapshot();
});
