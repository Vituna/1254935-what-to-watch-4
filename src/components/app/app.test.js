import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import {App} from "./app.jsx";

const mockStore = configureStore([]);

const movie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  cover: `img/bg-the-grand-budapest-hotel.jpg`,
  ratingScore: 8.9,
  ratingLevel: `Very good`,
  ratingCount: 240,
  textPartOne: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.`,
  textPartTwo: `Gustave prides himself on providing first-className service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
  director: `Wes Andreson`,
  starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`,
};

const movies = [
  {
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    year: 2014,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    cover: `img/bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 8.9,
    ratingCount: 240,
    textPartOne: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.`,
    textPartTwo: `Gustave prides himself on providing first-className service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,

    genre: `Sci-Fi`,
    year: 2014,
    cover: `img/bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 8.9,
    ratingCount: 240,
    textPartOne: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.`,
    textPartTwo: `Gustave prides himself on providing first-className service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    title: `Bohemian Rhapsody`,
    poster: `img/bohemian-rhapsody.jpg`,

    genre: `Comedies`,
    year: 2020,
    cover: `img/bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 5.4,
    ratingCount: 140,
    textPartOne: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.`,
    textPartTwo: `Gustave prides himself on providing first-className service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    title: `Macbeth`,
    poster: `img/macbeth.jpg`,

    genre: `Crime`,
    year: 2019,
    cover: `img/bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 9.9,
    ratingCount: 20,
    textPartOne: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.`,
    textPartTwo: `Gustave prides himself on providing first-className service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    title: `Aviator`,
    poster: `img/aviator.jpg`,

    genre: `Documentary`,
    year: 2010,
    cover: `img/bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 1.9,
    ratingCount: 1240,
    textPartOne: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.`,
    textPartTwo: `Gustave prides himself on providing first-className service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    title: `We need to talk about Kevin`,
    poster: `img/we-need-to-talk-about-kevin.jpg`,

    genre: `Horror`,
    year: 2004,
    cover: `img/bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 4.9,
    ratingCount: 40,
    textPartOne: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.`,
    textPartTwo: `Gustave prides himself on providing first-className service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    title: `What We Do in the Shadows`,
    poster: `img/what-we-do-in-the-shadows.jpg`,

    genre: `Thrillers`,
    year: 2010,
    cover: `img/bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 3.9,
    ratingCount: 280,
    textPartOne: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.`,
    textPartTwo: `Gustave prides himself on providing first-className service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    title: `Revenant`,
    poster: `img/revenant.jpg`,

    genre: `Kids & Family`,
    year: 2019,
    cover: `img/bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 7.9,
    ratingCount: 20,
    textPartOne: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.`,
    textPartTwo: `Gustave prides himself on providing first-className service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    title: `Johnny English`,
    poster: `img/johnny-english.jpg`,

    genre: `Romance`,
    year: 1014,
    cover: `img/bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 9.9,
    ratingCount: 2400,
    textPartOne: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.`,
    textPartTwo: `Gustave prides himself on providing first-className service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
];

const movieDetail = [
  {
    name: `Genre`,
    value: `Drama`,
  },
  {
    name: `Released`,
    value: 2014,
  },
  {
    name: `Director`,
    value: `Wes Andreson`,
  },
  {
    name: `Starring`,
    value: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`,
  },
  {
    name: `Run Time`,
    value: `1h 49m`,
  },
];


const activeGenre = `Drama`;
const genres = [`All genres`, `Drama`, `Documentary`, `Horror`];

const createNodeMock = () => {
  return {};
};

it(`Render App`, () => {
  const store = mockStore({
    mistakes: 0,
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            movie={movie}
            movies={movies}
            genres={genres}
            activeGenre={activeGenre}
            onGenreItemClick={() => {}}
            onShowMoreClick={() => {}}
            movieDetail={movieDetail}
          />
        </Provider>, {createNodeMock})
      .toJSON();

  expect(tree).toMatchSnapshot();
});
