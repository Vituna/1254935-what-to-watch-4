import * as React from "react";
import * as renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from "react-router-dom";

import NameSpace from "../../reducer/name-space";

import {history} from "../../utils";
import MyList from "./my-list";

const mockStore = configureStore([]);

export const movies = [
  {
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    year: 2014,
    runTime: 88,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    cover: `img/bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 8.9,
    ratingCount: 240,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.`,
    textPartTwo: `Gustave prides himself on providing first-className service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    previewImage: `img/bohemian-rhapsody.jpg`,
  },
  {
    title: `Bohemian Rhapsody`,
    poster: `img/bohemian-rhapsody.jpg`,

    genre: `Comedies`,
    year: 2020,
    runTime: 88,
    cover: `img/bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 5.4,
    ratingCount: 140,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.`,
    textPartTwo: `Gustave prides himself on providing first-className service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    previewImage: `img/bohemian-rhapsody.jpg`,
  },
];

const createNodeMock = () => {
  return {};
};

it(`Render MyList`, () => {

  const store = mockStore({
    [NameSpace.DATA]: {
      movies,
    },
    [NameSpace.USER]: {
      favoritesFilms: movies,
    },

  });

  const tree = renderer
    .create(
        <Router
          history={history}
        >
          <Provider store={store}>
            <MyList
              movies={movies}
            />)
          </Provider>
        </Router>, {createNodeMock})
    .toJSON();

  expect(tree).toMatchSnapshot();
});
