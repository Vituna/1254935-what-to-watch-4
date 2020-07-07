import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

import {PageDetails} from './page-details.jsx';

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

const createNodeMock = () => {
  return {};
};

it(`Should PageDetails render correctly`, () => {
  const store = mockStore({
    mistakes: 0,
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <PageDetails
            movieDetail={movieDetail}
          />
        </Provider>, {createNodeMock})
    .toJSON();

  expect(tree).toMatchSnapshot();
});
