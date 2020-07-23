import * as React from "react";
import * as renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import {GenresList} from "./genres-list";
import {DefaultGenre} from "../../consts";

const mockStore = configureStore([]);

const createNodeMock = () => {
  return {};
};

const noop = () => {
  return;
};

const genres: string[] = [`All genres`, `Drama`, `Documentary`, `Horror`];

it(`Should GenresList render correctly`, () => {
  const store = mockStore({
  });
  const tree = renderer
  .create(
      <Provider store={store}>
        <GenresList
          genres={genres}
          activeGenre={DefaultGenre}
          onGenreItemClick={noop}
        />
      </Provider>, {createNodeMock})
  .toJSON();

  expect(tree).toMatchSnapshot();
});
