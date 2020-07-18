import * as React from "react";
import * as renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import {GenresList} from './genres-list';

const mockStore = configureStore([]);

const createNodeMock = () => {
  return {};
};

export const noop = () => {
};

const activeGenre: string = `All genres`;

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
