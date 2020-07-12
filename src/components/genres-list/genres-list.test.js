import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import {GenresList} from './genres-list.jsx';

const mockStore = configureStore([]);

const createNodeMock = () => {
  return {};
};

const mock = {
  activeGenre: `All genres`,
  genres: [`All genres`, `Drama`, `Documentary`, `Horror`]
};

it(`Should GenresList render correctly`, () => {
  const {activeGenre, genres} = mock;
  const store = mockStore({
  });
  const tree = renderer
  .create(
      <Provider store={store}>
        <GenresList
          genres={genres}
          activeGenre={activeGenre}
          onGenreItemClick={() => {}}
        />
      </Provider>, {createNodeMock})
  .toJSON();

  expect(tree).toMatchSnapshot();
});
