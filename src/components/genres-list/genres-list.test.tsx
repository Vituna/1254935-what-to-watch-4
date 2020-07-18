import * as React from "react";
import * as renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import {GenresList} from './genres-list';

const mockStore = configureStore([]);

const createNodeMock = () => {
  return {};
};

const noop = () => {
  return;
};

const allGenres = `All genres`;

const activeGenre: string = allGenres;

const genres: string[] = [`All genres`, `Drama`, `Documentary`, `Horror`];

it(`Should GenresList render correctly`, () => {
  const store = mockStore({
  });
  const tree = renderer
  .create(
      <Provider store={store}>
        <GenresList
          genres={genres}
          activeGenre={activeGenre}
          onGenreItemClick={noop}
        />
      </Provider>, {createNodeMock})
  .toJSON();

  expect(tree).toMatchSnapshot();
});
